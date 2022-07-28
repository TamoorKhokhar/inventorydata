import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function AllStoresData() {
  const StoresData = useSelector((state) => {
    return state?.store?.store;
  });
  const Storedata = Object.values(StoresData);
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
            color: "#132F4C"
          }}>
          <h1>ALL STORES DATA</h1>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3DAD6A",
              marginTop: "1.5rem"
            }}>
            <Link to="/createstores" style={{ textDecoration: "none", color: "white" }}>
              Create Store
            </Link>
          </Button>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px"
        }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Index</b>
              </TableCell>
              <TableCell align="center">
                <b>Store Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Categories</b>
              </TableCell>
              <TableCell align="center">
                <b>View Stores</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Storedata.map((currEle, index) => {
              return (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center">{index}</TableCell>
                  <TableCell align="center">{currEle.storeName}</TableCell>
                  <TableCell align="center">{currEle.tags}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#3DAD6A",
                        marginTop: "4%",
                        marginBottom: "4%"
                      }}>
                      <Link
                        to={`/selectedstores/${currEle.id}`}
                        state={{
                          fromStore: true,
                          storeCategory: currEle.tags
                        }}
                        style={{ textDecoration: "none", color: "white" }}>
                        View Store
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllStoresData;
