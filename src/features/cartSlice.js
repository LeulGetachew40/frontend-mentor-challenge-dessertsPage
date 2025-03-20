import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem: {
      reducer(state, action) {
        // check if the item already exists in the cart,
        // if it exists, increase the item quantity
        // otherwise add it as a new item

        // do the operation in a reducer of its own
        state.cartItems.push(action.payload);
      },
    },
    deleteItem: {
      reducer(state, action) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      },
    },
    increaseItemQuantity: {
      reducer(state, action) {
        const cartItem = state.cartItems.find(
          (item) => item.id === action.payload
        );
        if (cartItem) {
          cartItem.quantity += 1;
          cartItem.totalPrice = cartItem.quantity * cartItem.price;
        }
      },
    },
    decreaseItemQuantity: {
      reducer(state, action) {
        const cartItem = state.cartItems.find(
          (item) => item.id === action.payload
        );
        if (cartItem) {
          cartItem.quantity -= 1;
          cartItem.totalPrice = cartItem.quantity * cartItem.price;
        }
        if (cartItem.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      },
    },
    clearCartItems: {
      reducer(state) {
        state.cartItems = [];
      },
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItems,
} = cartSlice.actions;

export function getCartItems(state) {
  return state.cart.cartItems;
}

export function getCartQuantity(state) {
  return state.cart.cartItems.length;
}

export function getCartItemQuantityById(id) {
  return function (state) {
    const cartItemQuantity = state.cart.cartItems.find(
      (item) => item.id === id
    )?.quantity;
    if (cartItemQuantity) {
      return cartItemQuantity;
    }
    return 0;
  };
}
export function getTotalCartPrice(state) {
  return state.cart.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
}

export default cartSlice.reducer;
