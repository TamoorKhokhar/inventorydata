import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getProducts } from "../services/tableDataServices";
import { Link, useParams } from "react-router-dom";

function AllProductData() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const callingApi = () => {
      getProducts(id)
        .then((res) => {
          console.log(res.data, "data");
          setProduct(res.data.payload.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    callingApi();
  }, []);
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#132F4C",
            fontSize: "18px"
          }}>
          <h1>ALL PRODUCTS DATA</h1>
        </Grid>
        <Button
          xs={8}
          variant="contained"
          sx={{
            backgroundColor: "#3DAD6A",
            marginTop: "4%",
            marginBottom: "4%"
          }}>
          <Link to="/product" style={{ textDecoration: "none", color: "white" }}>
            Add Product
          </Link>
        </Button>
      </Grid>
      <TableContainer xs={12} component={Paper} sx={{ marginTop: "20px" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <b>Index</b>
              </TableCell>
              <TableCell align="right">
                <b>Product Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Product Quantity:</b>
              </TableCell>
              <TableCell align="right">
                <b>Product Price</b>
              </TableCell>
              <TableCell align="right">
                <b>Product Categories</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product?.map((currEle, index) => {
              return (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{index}</TableCell>
                  <TableCell align="center">{currEle.name}</TableCell>
                  <TableCell align="center">{currEle.quantity}</TableCell>
                  <TableCell align="center">{currEle.price}</TableCell>
                  <TableCell align="center">{currEle.category}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllProductData;
