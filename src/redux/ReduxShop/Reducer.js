import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  total: 0,
};
const createProduct = (item) => {
  return {
    productData: item.data,
    totalPrice: item.data.price * item.counter,
    quantity: item.counter,
  };
};
const addToShopReducer = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(createProduct(action.payload));
    },
    increament(state, action) {
      state.products.quantity += action.payload
    },
    decreament(state, action) {
      action.payload -= 1;
    },
  },
});
export const { addProduct, increament, decreament } = addToShopReducer.actions;
export default addToShopReducer.reducer;
