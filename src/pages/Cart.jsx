import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartLineItem from "../components/CartLineItem";
import { getTotal } from "../components/redux/cartSlice";
import Title from "../components/Title";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    dispatch(getTotal);
  }, []);

  return (
    <>
      <Container sx={{ m: "auto" }}>
        <Title title="Your Bag" cart={true} />
        <Grid container rowSpacing={2} display="flex" flexDirection={"column"}>
          {cartItems.length === 0 && (
            <Typography variant="h5">
              Your Cart is Empty. <Link to="/">SHOP NOW</Link>
            </Typography>
          )}
          {cartItems.length > 0 &&
            cartItems.map((product, idx) => (
              <Grid key={idx} item xs={12}>
                <CartLineItem product={product} />
              </Grid>
            ))}
        </Grid>
        {cartItems.length > 0 && (
          <>
            <Divider sx={{ margin: "1rem" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">Order Total </Typography>
              <Typography variant="h5">
                $ {cart.cartTotal.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Total items in Cart </Typography>
              <Typography variant="h6">{cart.cartTotalQty} Items</Typography>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
