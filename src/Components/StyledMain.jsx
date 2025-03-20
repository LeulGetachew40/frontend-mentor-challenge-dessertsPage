import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getOrderItemsQuantity } from "../features/orderSlice";
import OrderConfirmation from "./OrderConfirmation";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
`;

const Main = ({ children }) => {
  const orderItemsQuantity = useSelector(getOrderItemsQuantity);
  return (
    <StyledMain>
      {children}
      {orderItemsQuantity > 0 && <OrderConfirmation />}
    </StyledMain>
  );
};

export default Main;
