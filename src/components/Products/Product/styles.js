import { makeStyles } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#fccd40",
    border: "1px solid #fccd40",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
