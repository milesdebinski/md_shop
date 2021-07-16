import { createTheme } from "@material-ui/core/styles";
import { orange, pink, teal } from "@material-ui/core/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: teal[500],
    },
  },
});

export default Theme;
