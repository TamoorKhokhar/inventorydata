import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#3DAD6A" }}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Inventory Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Header;
