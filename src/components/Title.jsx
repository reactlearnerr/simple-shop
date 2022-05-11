import { Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./redux/cartSlice";

const StyledTitle = styled(Typography)`
  margin: 3rem 0;
  text-transform: uppercase;
  text-decoration: underline crimson;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Title = ({ title, cart }) => {
  const dispatch = useDispatch();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledTitle variant="h2">{title}</StyledTitle>
      {cart && (
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(clearCart())}
        >
          CLEAR CART
        </Button>
      )}
    </Container>
  );
};

export default Title;
