import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function LandingPage() {
  return (
    <>
      <Grid
        container
        fixed
        xs={12}
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          height: "100vh"
        }}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3rem",
            color: "#132F4C",
            fontSize: "1.5vw",
            textAlign: "center"
          }}>
          <h1>LUMINOGICS PORTAL</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3DAD6A",
                marginTop: "1rem",
                width: "15%"
              }}>
              <Link to="/allstores" style={{ textDecoration: "none", color: "white" }}>
                Get Started
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
