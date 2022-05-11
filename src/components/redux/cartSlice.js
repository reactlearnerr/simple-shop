import { StarRate } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    increaseQty: (state, action) => {
      const cartItemToUpdate = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItemToUpdate.qty = cartItemToUpdate.qty + 1;
    },
    decreaseQty: (state, action) => {
      const cartItemToUpdate = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (cartItemToUpdate.qty > 1) {
        cartItemToUpdate.qty = cartItemToUpdate.qty - 1;
      }
    },
    removeItem: (state, action) => {
      const cartItemId = action.payload;
      console.log(cartItemId);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartItemId
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    getTotal: (state) => {
      let { total, cartQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem);
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.total += itemTotal;
          cartTotal.cartQty += qty;

          return cartTotal;
        },
        { total: 0, cartQty: 0 }
      );
      state.cartTotalQty = cartQty;
      state.cartTotal = total;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
  getTotal,
  updateCart,
} = cartSlice.actions;

export default cartSlice;
