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
      <Grid container xs={12}>
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
          <h1>ALL STORES DATA</h1>
        </Grid>
        <Button
          xs={8}
          variant="contained"
          sx={{
            backgroundColor: "#3DAD6A",
            marginTop: "4%",
            marginBottom: "4%"
          }}>
          <Link to="/createstores" style={{ textDecoration: "none", color: "white" }}>
            Create Store
          </Link>
        </Button>
      </Grid>
      <TableContainer xs={12} component={Paper} sx={{ marginTop: "20px" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Index</b>
              </TableCell>
              <TableCell align="right">
                <b>Store Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Categories</b>
              </TableCell>
              <TableCell align="right">
                <b>View Stores</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Storedata.map((currEle, index) => {
              return (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{index}</TableCell>
                  <TableCell align="right">{currEle.storeName}</TableCell>
                  <TableCell align="right">{currEle.tags}</TableCell>
                  <TableCell align="right">
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
