import { createTheme } from "@material-ui/core/styles";
import { orange, pink, teal, grey } from "@material-ui/core/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#fccd40",
    },
    secondary: {
      main: grey[900],
    },
  },
});

export default Theme;
