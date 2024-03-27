import { configureStore } from "@reduxjs/toolkit";
import {addToCard} from './ReduxShop/Reducer'
const store = configureStore({
    reducer : addToCard
})
export default store