import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: "",
  state: [],
  total: 0,
};
const addToShopReducer = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCard(state, action) {
      const check = state.state.findIndex(item => item.id === action.payload.id)
      if(check !== -1){
        state.state[check].quantity += action.payload.quantity
      }else{
        state.list.push(action.payload)
      }
    },
  },
});
export const { addToCard } = addToShopReducer.actions;
export default addToShopReducer.reducer;
