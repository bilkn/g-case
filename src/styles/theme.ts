import { createTheme } from "@mui/material";

const openSans = `'Open Sans', sans-serif`;

export const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "capitalize",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: openSans,
    h1: {
      fontFamily: openSans,
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.3,
      letterSpacing: "0.0125em",
    },
    h2: {
      fontFamily: openSans,
      fontWeight: 600,
      fontSize: "1.3rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: openSans,
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.3,
      letterSpacing: "0.16px",
    },
    body2: {
      fontFamily: openSans,
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: 1.4,
    },
    button: {
      fontFamily: openSans,
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
  },
  palette: {
    mode: "light",
    common: {
      white: "#fff",
    },
    primary: {
      main: "#1EA4CE",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F2F0FD",
      contrastText: "#1EA4CE",
    },
    grey: {
      200: "#E0E0E0",
      300: "#A8A8A8",
      500: "#6F6F6F",
    },
    text: {
      primary: "#191919",
      secondary: "#525252",
    },
    action: {
      selected: "#1EA4CE",
    },
    divider: "#F4F4F4",

    background: {
      default: "#FAFAFA",
    },
  },
  shape: {
    borderRadius: 2,
  },
});
