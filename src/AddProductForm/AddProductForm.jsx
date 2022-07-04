import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../Redux/Actions/AddproductAction";
function AddProductForm() {
  const location = useLocation();
  const [productName, setproductName] = useState("");
  const [productQuantity, setProductQuantity] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState([]);
  const [productAllData, setproducAllData] = useState([]);
  const dispatch = useDispatch();
  const Products = useSelector((state) => {
    console.log(state);
    return state?.product?.product;
  });
  const SubmitProductForm = (e) => {
    e.preventDefault();
    if (productName && productQuantity && productPrice && productCategory) {
      alert("Product Data Added Successfully!");
    }
    const newEntry = {
      productName: productName,
      productQuantity: productQuantity,
      productPrice: productPrice,
      productCategory: productCategory
    };

    setproducAllData([...productAllData, newEntry]);
    dispatch(AddProduct(newEntry));
    setproductName("");
    setProductQuantity("");
    setProductPrice("");
    setProductCategory("");
  };

  return (
    <>
      <Grid
        container
        xs={12}
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          display: "flex",
          flexDirection: "row"
        }}>
        <Box
          component="form"
          onSubmit={SubmitProductForm}
          xs={6}
          sx={{
            background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
            display: "flex",
            justifyContent: "center",
            alignitem: "center",
            marginTop: "2%",
            marginLeft: "3%",
            width: "40vw",
            border: "5px solid #3DAD6A",
            borderRadius: "5px"
          }}>
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "90%",
                color: "#132F4C"
              }}>
              <h1>Add Stores Product</h1>

              <h4>Enter Product Name:</h4>
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant="outlined"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
              />
              <h4>Enter Quantity:</h4>
              <TextField
                required
                id="outlined-required"
                label="Quantity"
                variant="outlined"
                type="number"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
              <h4>Enter Price:</h4>
              <TextField
                required
                id="outlined-required"
                label="Price"
                variant="outlined"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <h4>Add Category:</h4>
              <TextField
                id="outlined-select-currency"
                select
                label="Selcet CateGory"
                helperText="Please select your Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}>
                {location?.state?.storeCategory?.map((type) => {
                  return (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </TextField>
              <Button
                disabled={
                  productName === "" ||
                  productQuantity === "" ||
                  productPrice === "" ||
                  productCategory?.length === 0
                }
                variant="contained"
                onClick={SubmitProductForm}
                sx={{
                  backgroundColor: "#3DAD6A",
                  marginTop: "4%",
                  marginBottom: "4%"
                }}>
                Add Product
              </Button>
            </Box>
          </Grid>
        </Box>

        <Grid
          item
          xs={6}
          sx={{
            background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2%",
            marginLeft: "3%",
            border: "5px solid #3DAD6A",
            borderRadius: "5px",
            color: "#132F4C",
            fontSize: "18px"
          }}>
          <h1>All Products</h1>
          {Products?.map((currEle, index) => {
            return (
              <Card
                key={index}
                sx={{
                  background:
                    "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
                  borderRadius: "5px",
                  display: "flex",
                  width: "50ww",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  border: "1px solid grey",
                  marginTop: "2%",
                  marginLeft: "2%"
                }}>
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    <b> Product Name:</b> {currEle.productName}
                  </Typography>
                  <Typography variant="body2" component="div">
                    <b> Product Quantity:</b> {currEle.productQuantity}
                  </Typography>

                  <Typography variant="body2" component="div">
                    <b> Product Price:</b> {currEle.productPrice}
                  </Typography>
                  <Typography variant="body2" component="div">
                    <b> Product Category:</b> {currEle.productCategory}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default AddProductForm;
