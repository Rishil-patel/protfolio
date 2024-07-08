import { createTheme } from "@mui/material";

const downTheme = createTheme();

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF", // Define your primary color
    },
    secondary: {
      main: "#626262", // Define your secondary color
    },
    text3: {
      main: "#929292", // Define your secondary color
    },
    error: {
      main: "#f44336", // Define your error color
    },
    warning: {
      main: "#ff9800", // Define your warning color
    },
    info: {
      main: "#B88DEB6", // Define your info color
    },
    success: {
      main: "#4caf50", // Define your success color
    },
    lightgreen: {
      main: "#5ff35f",
    },
    grayblue: {
      main: "#202236c9",
    },
    btncolor: {
      main: "#b8deb6",
    },
    btntext: {
      main: "#ffffff",
    },
    gray: {
      main: "#929292",
    },

    text4: {
      main: "#000248de",
    },

    background: {
      default: "#fafafa", // Define your default background color
    },
  },

  typography: {
    h1: {
      fontSize: "3rem",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
    },
    h2: {
      fontSize: "20px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    h4: {
      fontSize: "22px",
    },
    h3: {
      fontSize: "16px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
    h5: {
      fontSize: "18px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
    h6: {
      fontSize: "15px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
    subtitle1: {
      color: "#90ee90",
      fontSize: "15px",
      borderBottom: "1px solid #90ee90",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    subtitle2: {
      fontSize: "16px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "13px",
    },

    title: {
      fontSize: "40px",
      fontWeight: "600",
      fontFamily: "cursive",
    },
    title2: {
      fontSize: "30px",
      fontFamily: "cursive",
    },

    Headingtext: {
      display: "flex",
      alignItem: "center",
      fontSize: "20px",
    },
  },

  LinearProgress: {
    determinate: {
      color: "red",
    },
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#000248de", // Custom color for FormLabel
          [downTheme.breakpoints.down("md")]: {
            fontSize: "14px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
        },
        contained: {
          color: "#000248de",
          fontSize: "16px",

          [downTheme.breakpoints.down("md")]: {
            fontSize: "14px",
          },
        },
        Circlebtn: {
          color: "#000248a3",
          fontSize: "14px",
          border: "1px solid lightgray",

          [downTheme.breakpoints.down("md")]: {
            fontSize: "12px",
          },
        },

        Cardbtn2: {
          colors: "#000248de",
          background: "transparent",
          width: "220px",
          border: "1px solid #000248de",
        },
      },
    },
  },
});

export default theme;
