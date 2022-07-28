import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { AddProduct } from "../Redux/Actions/AddproductAction";
import { getTags, addProduct } from "../services/tableDataServices";
import { Link, useParams } from "react-router-dom";
import theme from "../theme/theme";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
function AddProductForm() {
  const [productName, setproductName] = useState("");
  const [productQuantity, setProductQuantity] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState("");
  const [productAllData, setproducAllData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [Items, setItems] = useState([]);
  useEffect(() => {
    const callingApi = () => {
      getTags(id)
        .then((res) => {
          setItems(res.data.payload.data.categories);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    callingApi();
  }, []);

  const SubmitProductForm = async (e) => {
    e.preventDefault();
    const newEntry = {
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      category: productCategory
    };
    const DataApi = await addProduct(newEntry, id);

    setproducAllData([...productAllData, newEntry]);
    dispatch(AddProduct(DataApi));
    setproductName("");
    setProductQuantity("");
    setProductPrice("");
    setProductCategory("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh"
        }}>
        <Grid
          item
          xs={10}
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
              width: "100%",
              border: "5px solid #3DAD6A",
              borderRadius: "5px",
              height: "max-content"
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "90%",
                color: "#132F4C"
              }}>
              <Typography variant="h4">ADD STORES PRODUCT</Typography>

              <Typography variant="h3">Enter Product Name:</Typography>
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant="outlined"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
              />
              <Typography variant="h3">Enter Quantity:</Typography>
              <TextField
                required
                id="outlined-required"
                label="Quantity"
                variant="outlined"
                type="number"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
              <Typography variant="h3">Enter Price:</Typography>
              <TextField
                required
                id="outlined-required"
                label="Price"
                variant="outlined"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <Typography variant="h3">Select Category:</Typography>
              <TextField
                id="outlined-select-currency"
                select
                label="Selcet CateGory"
                helperText="Please select your Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}>
                {Items?.map((type) => {
                  return (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </TextField>
              <Grid item>
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
                    marginTop: "1rem",
                    marginBottom: "1.5rem",
                    float: "right",
                    width: "9rem"
                  }}>
                  <Link
                    to={`/selectedStores/${id}`}
                    style={{ textDecoration: "none", color: "white" }}>
                    Add Product
                  </Link>
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AddProductForm;
