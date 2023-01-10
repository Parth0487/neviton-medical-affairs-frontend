import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24a377",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#092546",
    },
    warning: {
      main: "#fcee30",
    },
    success: {
      main: "#00f090",
    },
    custom: {
      main: "#E3E230",
      light: "#ffff68",
      dark: "#adb000",
    },
    text: {
      primary: "#21364C",
    },
    grey: {
      300: "#dfdfdf",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    h6: {
      fontSize: "1.1rem",
      fontWeight: 900,
    },
  },
  // shape: {
  //   borderRadius: 10,
  // },
});

export default theme;
