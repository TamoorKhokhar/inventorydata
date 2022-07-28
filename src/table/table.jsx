import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { getStoreData } from "../services/tableDataServices";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Typography } from "@mui/material";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
const columns = [
  { field: "index", headerName: "Store No", width: 420 },
  { field: "name", headerName: "Store Name", width: 420 },
  { field: "categories", headerName: "Store Category", width: 420 },

  {
    field: "view",
    headerName: "View Store",
    width: 420,
    sortable: false,
    renderCell: (params) => {
      return (
        <Link
          style={{ textDecoration: "none", fontSize: "12px" }}
          state={{
            fromAddStore: true,
            categories: params.row.categories
          }}
          to={`/selectedstores/${params.row._id}`}>
          <StorefrontIcon sx={{ color: "#132F4C" }}></StorefrontIcon>
        </Link>
      );
    }
  }
];

export default function Table() {
  const [store, setStore] = useState([]);
  const fetchData = async () => {
    const DataApi = await getStoreData();

    setStore(DataApi);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rows = store.map((element, index) => {
    return {
      ...element,
      name: element.name,
      index: index,
      categories: element.categories
    };
  });
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
              marginTop: "2rem"
            }}>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "flex-start"
              }}>
              <Typography variant="h2">STORES DATA</Typography>
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                height: "max-content"
              }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3DAD6A"
                }}>
                <Link
                  to="/createstores"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center"
                  }}>
                  <AddCircleOutlineIcon
                    sx={{ height: "2.5rem", width: "2.5rem" }}></AddCircleOutlineIcon>
                </Link>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            item
            sx={{
              border: "5px solid #3DAD6A",
              borderRadius: "5px",
              marginTop: "2rem"
            }}>
            <DataGrid
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#132F4C",
                height: "400px"
              }}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => (row.id = uuidv4())}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
