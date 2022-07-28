// import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function Header() {
  // useEffect(() => {
  //   throw new Error("not valid Data");
  // });
  return (
    <>
      <Grid container>
        <Grid item sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ background: "#3DAD6A" }}>
            <Toolbar sx={{ display: "flex" }}>
              <Grid item xs={6}>
                <Typography variant="h6" color="inherit" component="div">
                  <Link to="landingPage" style={{ color: "white", textDecorationLine: "none" }}>
                    Luminogics
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="h6" color="inherit" component="div">
                  <Link
                    to="landingPage"
                    style={{ color: "white", textDecorationLine: "none", marginRight: "1rem" }}>
                    Home
                  </Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                  <Link to="/stores" style={{ color: "white", textDecorationLine: "none" }}>
                    Stores
                  </Link>
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
}
export default Header;
