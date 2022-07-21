import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStore } from "../Redux/Actions/AddStoreAction";
import { v4 as uuidv4 } from "uuid";
function StoreForm() {
  const [storeName, setStoreName] = useState("");
  const [category, setcategory] = useState([]);
  const [error, setError] = useState(false);
  const [allData, setallData] = useState([]);
  const dispatch = useDispatch();
  const SubmitForm = (e) => {
    e.preventDefault();

    if (storeName === "") {
      setError(true);
    }
    if (category === "") {
      setError(true);
    }

    const newEntry = {
      id: uuidv4(),
      storeName: storeName,
      tags: tags,
      categoryType: category
    };

    setallData([...allData, newEntry]);
    dispatch(AddStore(newEntry));
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
        background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
        display: "flex",
        justifyContent: "center",
        height: "100vh"
      }}>
      <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          onSubmit={SubmitForm}
          sx={{
            background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
            display: "flex",
            justifyContent: "center",
            alignitem: "center",
            marginTop: "4rem",
            width: "50vw",
            border: "5px solid #3DAD6A",
            borderRadius: "5px",
            height: "max-content"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              color: "#132F4C"
            }}>
            <h1>CREATE STORE</h1>
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
                borderRadius: "5px"
              }}>
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
                    border: "1px solid grey"
                  }}>
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
                      cursor: "pointer"
                    }}
                    onClick={() => RemoveTags(index)}>
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
                marginBottom: "4%"
              }}>
              <Link to="/allstores" style={{ textDecoration: "none", color: "white" }}>
                Add Store
              </Link>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default StoreForm;
