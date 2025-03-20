import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import orderReducer from "./features/orderSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
export default store;
