import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/bg.jpg";

export default makeStyles((theme) => ({
  background: {
    background: "no-repeat center center/cover",
    backgroundImage: `url(${Image})`,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "40px",
  },
}));
