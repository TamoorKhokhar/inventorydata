import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import theme from "../theme/theme";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeProvider } from "@emotion/react";
function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          height: "max-content",
          boxShadow: "0px 0px 30px 3px rgba(71, 80, 107, 0.7)"
        }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}>
          <Grid
            item
            xs={8}
            sx={{
              marginTop: "1rem",
              color: "secondary.main"
            }}>
            <Typography variant="h1"> LUMINOGICS PORTAL</Typography>
            <Typography variant="subtitle1">
              Wide Variety of IT Services and We work with small to mid-sized companies to build
              customized software solutions. We are serving our clients with Enterprise solutions
              salesforce, AWS, and Azure. We’ve exceled our experience in a wide range of industries
              to bring valuable insights and provide our customers.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  marginBottom: "1rem",
                  marginTop: "0.5rem"
                }}>
                <Link
                  to="/stores"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                  }}>
                  <Typography variant="h6" color="primary.light" component="div">
                    Your Solution
                  </Typography>
                  <ArrowForwardIcon
                    sx={{
                      width: "max-content",
                      marginLeft: "0.5rem"
                    }}></ArrowForwardIcon>
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-around"} alignItems={"center"}>
        <Grid
          item
          md={5}
          xs={10}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
            flexDirection: "column"
          }}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FAFAFA",
              overflow: "hidden"
            }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.IRI1X4xeTdD9jmdDOXaHQAHaDz&pid=Api&P=0"
              alt="image1"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography variant="h6">Inventory Software</Typography>
        </Grid>
        <Grid
          item
          md={5}
          xs={10}
          sx={{
            display: "flex",
            marginTop: "1.5rem",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FAFAFA",
              overflow: "hidden"
            }}>
            <img
              src="https://th-ey.com/wp-content/uploads/2019/08/what-is-a-software-house-1-1568x844.png"
              alt="image2"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography variant="h6">Engineering the future.</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LandingPage;
