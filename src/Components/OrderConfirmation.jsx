import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOrderItems,
  getOrderItems,
  getTotalOrderPrice,
} from "../features/orderSlice";
import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import Button from "./Button";
import { clearCartItems } from "../features/cartSlice";
import DeleteButton from "./DeleteButton";
const StyledOrderConfirmation = styled.div`
  padding: 30px;
  background-color: var(--color-red-50);
  width: 30%;
  border-radius: 20px;
`;
const OrderConfirmationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const OrderConfirmationHeader = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  margin: 10px 0;

  & > h1 {
    font-weight: 900;
    font-size: 3rem;
  }
`;

const OrderItemsDiv = styled.div`
  background-color: var(--color-rose-100);
  margin: 30px 0;
  border-radius: 20px;
  padding: 20px;

  max-height: 500px;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

const OrderSpecificsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-red-500);
`;

const OrderNamePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & > p {
    font-size: 1.2rem;
  }
`;

const OrderQuantityUnitPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

const TotalItemPrice = styled.div`
  & > p {
    font-weight: 600;
  }
`;

const OrderModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderConfirmation = () => {
  const orderItems = useSelector(getOrderItems);
  const orderTotalPrice = useSelector(getTotalOrderPrice);
  const dispatch = useDispatch();
  function handleClearOrderItems() {
    dispatch(clearOrderItems());
  }
  function handleClearCartItems() {
    dispatch(clearCartItems());
  }
  return (
    <OrderModalWindow onClick={handleClearOrderItems}>
      <OrderConfirmationContainer>
        <StyledOrderConfirmation>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <DeleteButton handleClick={handleClearOrderItems}></DeleteButton>
          </div>
          <OrderConfirmationHeader>
            <img src="assets/images/icon-order-confirmed.svg" alt="" />
            <h1>Order Confirmed</h1>
          </OrderConfirmationHeader>
          <p>We hope you enjoyed your food!</p>
          <OrderItemsDiv>
            {orderItems.map((item) => (
              <OrderItem>
                <OrderSpecificsDiv>
                  <StyledImage src={item.image.desktop} alt="" />

                  <OrderNamePriceContainer>
                    {/* Food name and item specs */}
                    <p>{item.name}</p>
                    <OrderQuantityUnitPriceContainer>
                      <p
                        style={{ color: "var(--color-red)", fontWeight: "600" }}
                      >
                        {item.quantity}x
                      </p>
                      <p
                        style={{
                          color: "var(--color-red-900)",
                          fontWeight: "600",
                        }}
                      >
                        &#64; {formatCurrency(item.price)}
                      </p>
                    </OrderQuantityUnitPriceContainer>
                  </OrderNamePriceContainer>
                </OrderSpecificsDiv>
                <TotalItemPrice>
                  {/* totalItemPrice */}
                  <p>{formatCurrency(item.totalPrice)}</p>
                </TotalItemPrice>
              </OrderItem>
            ))}
          </OrderItemsDiv>
          <div>
            <TotalPriceDiv>
              <div>
                <p>Total</p>
              </div>
              <p>{formatCurrency(orderTotalPrice)}</p>
            </TotalPriceDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Button
                width={"65%"}
                backgroundColor={"var(--color-red)"}
                color={"var(--color-red-50)"}
                handleClick={() => {
                  handleClearOrderItems();
                  handleClearCartItems();
                }}
              >
                Start new order
              </Button>
            </div>
          </div>
        </StyledOrderConfirmation>
      </OrderConfirmationContainer>
    </OrderModalWindow>
  );
};

export default OrderConfirmation;
