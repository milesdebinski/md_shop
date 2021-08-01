import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "#fccd40",
    border: "1px solid #fccd40",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
