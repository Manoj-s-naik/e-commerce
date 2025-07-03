import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 100,
};
export const cartSlices = createSlice({
  name : 'cart',
  initialState,
  reducers : {
    addCart : ()=>{
    // addCart : (product)=>{
      console.log("addcart function here");
      const value = 100;
    }
  }
})

export const {addCart,value}=cartSlices.actions;
export default cartSlices.reducer