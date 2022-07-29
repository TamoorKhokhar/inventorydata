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
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../services/tableDataServices";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import theme from "../theme/theme";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";

export default function SelectedStoresProduct() {
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
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          height: "100vh"
        }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center"
          }}>
          <Grid
            container
            item
            xs={10}
            sx={{
              color: "secondary.main",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem"
            }}>
            <Typography variant="h2">PRODUCTS DATA</Typography>
            <Tooltip title="Add Product" placement="right-end" arrow>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3DAD6A",
                  paddingTop: "0.5rem"
                }}>
                <Link
                  to={`/product/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}>
                  <ProductionQuantityLimitsIcon
                    sx={{ height: "2.5rem", width: "2.5rem" }}></ProductionQuantityLimitsIcon>
                </Link>
              </Button>
            </Tooltip>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              height: 450,
              border: "5px solid #3DAD6A",
              borderRadius: "5px",
              overflowY: "scroll",
              marginTop: "2rem"
            }}>
            <TableContainer
              component={Paper}
              sx={{
                background:
                  "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)"
              }}>
              <Table size="medium" aria-label="a dense table">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#3DAD6A"
                    }}>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white"
                      }}>
                      <b>Index</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white"
                      }}>
                      <b>Product Name</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white"
                      }}>
                      <b>Product Quantity:</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white"
                      }}>
                      <b>Product Price</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white"
                      }}>
                      <b>Product Categories</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product?.map((currEle, index) => {
                    return (
                      <TableRow
                        key={currEle?.storeId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0, color: "#132F4C" }
                        }}>
                        <TableCell align="center">{index}</TableCell>
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
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
