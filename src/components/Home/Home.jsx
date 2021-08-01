import React from "react";
import {
  Typography,
  Button,
  Divider,
  CardMedia,
  Paper,
  Backdrop,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography style={{ color: "#fff", opacity: "1" }} variant="h4">
        NEW STYLE
      </Typography>
      <Typography align="center" style={{ color: "#fff" }} variant="h2">
        ANOTHER DEMENSION OF SOUND
      </Typography>
      <Button
        size="large"
        component={Link}
        to="/store"
        variant="contained"
        color="primary"
        endIcon={<ArrowRightIcon />}
        style={{ margin: "18px" }}
      >
        shop now
      </Button>
    </div>
  );
};

export default Home;
