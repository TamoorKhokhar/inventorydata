import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3DAD6A ", //greenBackground,
      light: "#FAFAFA" //white
    },
    secondary: {
      main: "#132F4C", //blue-for-text
      light: "#6DB784" //green
    }
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      textAlign: "center"
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      marginTop: "1rem"
    },
    h3: {
      fontSize: "1em",
      fontWeight: 600,
      marginTop: "1rem",
      marginBottom: "0.5rem"
    },
    h4: {
      fontWeight: 600,
      lineHeight: "1.4",
      marginBottom: "0.35em",
      fontFamily: "sans-serif"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.6rem",
      textAlign: "center"
    },
    h6: {
      fontSize: "1.5em",
      textAlign: "center",
      width: "max-content"
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: "1.7rem",
      paddingTop: "10px",
      textAlign: "center"
    }
  }
});
export default theme;
