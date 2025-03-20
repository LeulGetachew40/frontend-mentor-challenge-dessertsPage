import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteItem } from "../features/cartSlice";
import DeleteButton from "./DeleteButton";
const CartItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  border-bottom: 1px solid #888686;

  padding-inline: 20px;
  padding-bottom: 20px;
`;
const CartSpecifics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > span {
    font-weight: 800;
    color: var(--color-red-900);
  }
`;
const PriceAndQuantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const ItemQuantity = styled.p`
  font-weight: 800;
  color: var(--color-red);
`;
const ItemPrice = styled.p`
  font-weight: 500;
  color: var(--color-red-900);
`;
const TotalPrice = styled.p`
  font-weight: 800;
  color: var(--color-red-500);
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteItem(item.id));
  }
  return (
    <CartItemDiv>
      <CartSpecifics>
        <span>{item.name}</span>
        <PriceAndQuantity>
          <ItemQuantity>{item.quantity}X</ItemQuantity>
          <ItemPrice>&#64; &#36;{item.price.toFixed(2)}</ItemPrice>
          <TotalPrice>&#36;{item.totalPrice.toFixed(2)}</TotalPrice>
        </PriceAndQuantity>
      </CartSpecifics>
      <DeleteButton handleClick={handleDelete} />
    </CartItemDiv>
  );
};

export default CartItem;
