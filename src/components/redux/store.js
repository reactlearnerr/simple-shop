import { configureStore } from "@reduxjs/toolkit";
import { getTotal } from "./cartSlice";
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });

store.dispatch(getTotal());

export default store;
