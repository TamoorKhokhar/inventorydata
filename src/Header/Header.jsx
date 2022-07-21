// import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function Header() {
  // useEffect(() => {
  //   throw new Error("not valid Data");
  // });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#3DAD6A" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" component="div">
              LUMINOGICS PORTAL
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
              <Link to="allstores" style={{ color: "white" }}>
                All Stores
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Header;
