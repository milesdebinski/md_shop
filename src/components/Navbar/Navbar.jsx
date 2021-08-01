import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { ShoppingCart, Home, Store } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            variant="outlined"
            color="secondary"
            component={Link}
            to="/"
          >
            <Home />
          </IconButton>
          <IconButton color="secondary" component={Link} to="/store">
            <Store />
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.button} />
          {location.pathname === "/store" && (
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
