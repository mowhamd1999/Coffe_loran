import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  total: 0,
};
const createProduct = (item) => {
  return {
    productData:item.data,
    totalPrice : item.data.price * item.counter,
    quantity : item.counter 
  }
}
const addToShopReducer = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct(state, action) {
      
      state.products.push(createProduct(action.payload))
    },
  },
});
export const {addProduct} = addToShopReducer.actions;
export default addToShopReducer.reducer;
