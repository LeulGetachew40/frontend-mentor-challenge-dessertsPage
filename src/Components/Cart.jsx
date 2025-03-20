import React from "react";
import Header from "./Header";
import styled from "styled-components";
import NoItemInCart from "./NoItemInCart";
import { useSelector } from "react-redux";
import {
  getCartItems,
  getCartQuantity,
  getTotalCartPrice,
} from "../features/cartSlice";
import CartItem from "./CartItem";
import OrderConfirmation from "./CartConfirmation";
const StyledCart = styled.div`
  background-color: var(--color-red-50);
  max-height: fit-content;
  max-width: 500px;
  width: 700px;
  padding-top: 30px;
  border-radius: 10px;
  /* background-image: url("assets/images/illustration-empty-cart.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; */
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;

  position: relative;

  & h1 {
    color: var(--color-red);
  }
`;

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const cartItemsQuantity = useSelector(getCartQuantity);
  const cartItemsTotalPrice = useSelector(getTotalCartPrice);
  return (
    <StyledCart>
      <div
        style={{
          position: "relative",
          top: "0px",
        }}
      >
        <Header>Your Cart({cartItemsQuantity})</Header>
      </div>
      {cartItemsQuantity > 0 && (
        <div>
          {cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      )}
      {cartItems.length === 0 && <NoItemInCart />}

      {cartItemsQuantity > 0 && (
        <OrderConfirmation totalPrice={cartItemsTotalPrice} />
      )}
    </StyledCart>
  );
};

export default Cart;
