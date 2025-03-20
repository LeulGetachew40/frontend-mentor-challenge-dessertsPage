import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: {
      reducer(state, action) {
        state.orderItems = action.payload;
      },
    },
    clearOrderItems: {
      reducer(state) {
        state.orderItems = [];
      },
    },
  },
});

export const { createOrder, clearOrderItems } = orderSlice.actions;
export function getOrderItems(state) {
  return state.order.orderItems;
}
export function getOrderItemsQuantity(state) {
  return state.order.orderItems.length;
}

export function getTotalOrderPrice(state) {
  return state.order.orderItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
}

export default orderSlice.reducer;
