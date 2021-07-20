import React from "react";
import theme from "./theme";
import "fontsource-roboto";
import { ThemeProvider } from "@material-ui/core/styles";
import { Products, Navbar, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
