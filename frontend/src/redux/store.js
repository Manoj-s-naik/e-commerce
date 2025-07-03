import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
