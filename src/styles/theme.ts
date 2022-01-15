const openSans = `Open Sans', sans-serif`;

export const theme = {
  typography: {
    htmlFontSize: "62.5%", // 10px
    fontFamily: openSans,
    h1: {
      fontFamily: openSans,
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.3,
      letterSpacing: "0.0125em",
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
      ternary: "#697488",
    },
    action: {
      selected: "#1EA4CE",
    },
    divider: "#F4F4F4",
    shadows: {
      1: "0px 6px 24px 0px #5D3EBC0A",
      2: "0px 4px 24px 0px #5D3EBC0A",
      3: "0px 1px 7px 0px #5D38C066",
    },
    background: {
      default: "#FAFAFA",
    },
  },
  shape: {
    borderRadius: "2px",
  },
};
