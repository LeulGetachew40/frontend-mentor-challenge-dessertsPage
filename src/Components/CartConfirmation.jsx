import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { formatCurrency } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../features/orderSlice";
import { getCartItems } from "../features/cartSlice";
const StyledCartConfirmation = styled.p`
  min-height: 100px;
  width: 100%;
  /* position: absolute;
  bottom: 0px;
  right: 0px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-inline: 0;
  padding-inline: 10px;
  padding-bottom: 30px;
`;
const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    font-size: 1.5rem;
  }
  & > p {
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

const DeliveryDiv = styled.div`
  height: 80px;
  background-color: var(--color-rose-100);
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.1rem;

  & > img {
    transform: scale(1.5);
  }
`;
const CartConfirmation = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  function handleConfirmOrder() {
    dispatch(createOrder([...cartItems]));
  }
  return (
    <StyledCartConfirmation>
      <TotalPriceDiv>
        <div>
          <p>Total</p>
        </div>
        <p>{formatCurrency(totalPrice)}</p>
      </TotalPriceDiv>
      <DeliveryDiv>
        <img src="assets/images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <strong>carbon neutral</strong> delivery
        </p>
      </DeliveryDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          width={"65%"}
          backgroundColor={"var(--color-red)"}
          color={"var(--color-red-50)"}
          handleClick={handleConfirmOrder}
        >
          Confirm Order
        </Button>
      </div>
    </StyledCartConfirmation>
  );
};

export default CartConfirmation;
