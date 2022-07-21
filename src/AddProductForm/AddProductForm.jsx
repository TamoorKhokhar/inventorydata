import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../Redux/Actions/AddproductAction";
import { Link, useParams } from "react-router-dom";
function AddProductForm() {
  const [productName, setproductName] = useState("");
  const [productQuantity, setProductQuantity] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState([]);
  const [productAllData, setproducAllData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const StoresData = useSelector((state) => {
    return state?.store?.store?.filter((value) => value?.id === id);
  });
  const Storedata = Object.values(StoresData);
  const SubmitProductForm = (e) => {
    e.preventDefault();
    if (productName && productQuantity && productPrice && productCategory) {
      alert("Product Data Added Successfully!");
    }
    const newEntry = {
      productName: productName,
      productQuantity: productQuantity,
      productPrice: productPrice,
      productCategory: productCategory,
      storeId: id
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
        fixed
        xs={12}
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          display: "flex",
          justifyContent: "center"
        }}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}>
          <Box
            component="form"
            onSubmit={SubmitProductForm}
            sx={{
              background:
                "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
              display: "flex",
              justifyContent: "center",
              alignitem: "center",
              marginTop: "4rem",
              width: "50vw",
              border: "5px solid #3DAD6A",
              borderRadius: "5px"
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "90%",
                color: "#132F4C"
              }}>
              <h1>ADD STORES PRODUCT</h1>

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
                {Storedata?.length > 0 &&
                  Storedata[0].tags.map((type) => {
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
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem"
                }}>
                <Link
                  to={`/selectedStores/${Storedata?.length > 0 && Storedata[0]?.id}`}
                  style={{ textDecoration: "none", color: "white" }}>
                  Add Product
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AddProductForm;
