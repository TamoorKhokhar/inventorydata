import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";

function StoreForm() {
  const [storeName, setStoreName] = useState("");
  const [category, setcategory] = useState([]);
  const [error, setError] = useState(false);
  const [allData, setallData] = useState([]);

  const SubmitForm = (e) => {
    e.preventDefault();

    if (storeName === "") {
      setError(true);
    }
    if (category === "") {
      setError(true);
    }

    const newEntry = {
      storeName: storeName,
      tags: tags,
      categoryType: category,
    };

    setallData([...allData, newEntry]);
    setStoreName("");
    setTags([]);
    setcategory("");
    setError(false);
  };

  const [tags, setTags] = useState([]);
  function handlekeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    setcategory([]);
  }

  function RemoveTags(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <Grid
      container
      fixed
      sx={{
        height: "100vh",
        background:
          "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box component="form" onSubmit={SubmitForm}>
        <Grid
          container
          xs={12}
          sx={{
            background:
              "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2%",
            marginLeft: "3%",
            width: "50vw",
            border: "5px solid #3DAD6A",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              color: "#132F4C",
              fontSize: "18px",
            }}
          >
            <h1>Create Store</h1>
            <h4>Enter Store Name:</h4>
            <TextField
              required
              id="outlined-required"
              label="Required"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              error={error}
            />

            <h4>Add Store Category:</h4>

            <TextField
              xs={8}
              sx={{ border: "none", outline: "none" }}
              onKeyDown={handlekeyDown}
              id="standard-basic"
              variant="standard"
              label="Type Category..."
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              error={error}
            />
            <Grid
              item
              sx={{
                display: "flex",
                border: "1px solid grey",
                alignItems: "center",
                flexWrap: "wrap",
                padding: ".5em",
                paddingLeft: ".75em",
                paddingRight: ".75em",
                borderRadius: "5px",
              }}
            >
              {tags.map((tags, index) => (
                <Grid
                  item
                  key={index}
                  sx={{
                    backgroundColor: "#3DAD6A",
                    color: "#FFFFFF",
                    padding: ".3em",
                    borderRadius: "10px",
                    marginTop: "2%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    border: "1px solid grey",
                  }}
                >
                  {tags}
                  <Grid
                    item
                    sx={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: "white",
                      color: "black",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      marginLeft: ".5em",
                      border: "2px solid black",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={() => RemoveTags(index)}
                  >
                    &times;
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Button
              disabled={storeName === "" || tags?.length === 0}
              variant="contained"
              onClick={SubmitForm}
              sx={{
                backgroundColor: "#3DAD6A",
                marginTop: "4%",
                marginBottom: "4%",
              }}
            >
              Create Store
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid
        item
        xs={12}
        sx={{
          background:
            "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1%",
          width: "40vw",
          border: "5px solid #3DAD6A",
          borderRadius: "5px",
          color: "#132F4C",
          fontSize: "18px",
        }}
      >
        <h1> All Stores </h1>
        {allData.map((currEle) => {
          return (
            <Card
              sx={{
                background:
                  "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                border: "1px solid grey",
                marginTop: "2%",
                marginLeft: "2%",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {currEle.storeName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Store Description: Your Store
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3DAD6A",
                    marginTop: "4%",
                    marginBottom: "4%",
                  }}
                >
                  <Link
                    to="/product"
                    state={{
                      fromStore: true,
                      storeCategory: currEle.tags,
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Add Product
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default StoreForm;
