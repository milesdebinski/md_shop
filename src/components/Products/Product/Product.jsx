import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card variant="elevation" className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardAcions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
        <Button variant="contained" color="primary">
          ELO
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;