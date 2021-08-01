import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    boxShadow: "none",
    background: "#fccd40",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));
