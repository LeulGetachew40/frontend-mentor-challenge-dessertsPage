import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import {
  addItem,
  getCartItemQuantityById,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/cartSlice";
import Button from "./Button";

const Image = styled.img`
  border-radius: 10px;
  width: 275px;
  height: 260px;
  box-shadow: var(--shadow-lg);

  ${(props) => {
    return (
      props.isselected === "true" &&
      css`
        outline: 2px solid var(--color-red);
      `
    );
  }}
`;

const ImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-right: 50px;
  border-radius: 10px;
`;

const UpdateCartItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.7rem;
  transform: scale(1.5) translateY(-10px);
  width: 125px;
  height: 30px;

  background-color: var(--color-red);

  border-radius: calc(infinity * 1px);

  font-size: 0.8rem;
  color: var(--color-rose-100);
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: inherit;

    border: none;

    cursor: pointer;
  }
`;

const DessertItem = ({ item }) => {
  const {
    id,
    image,
    category: dessertCategory,
    name: dessertName,
    price,
  } = item;
  const cartItemQuantity = useSelector(getCartItemQuantityById(id));
  const dispatch = useDispatch();
  function handleAdd() {
    if (cartItemQuantity > 0) {
      return dispatch(increaseItemQuantity(id));
    }
    dispatch(addItem({ ...item, quantity: 1, totalPrice: price }));
  }
  function handleIncrease() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(id));
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <CardContainer>
          <ImageButtonContainer>
            <Image
              isselected={(cartItemQuantity > 0).toString()}
              src={image.desktop}
              alt=""
            />
            {cartItemQuantity > 0 ? (
              <UpdateCartItemQuantity>
                <button onClick={handleDecrease}>
                  <img src="assets\images\icon-decrement-quantity.svg" alt="" />
                </button>
                {cartItemQuantity}
                <button onClick={handleIncrease}>
                  <img src="assets\images\icon-increment-quantity.svg" alt="" />
                </button>
              </UpdateCartItemQuantity>
            ) : (
              <Button
                backgroundColor={"var(--color-red-50)"}
                width={"125px"}
                handleClick={handleAdd}
                color={"var(--color-red-900)"}
                isDessertItem={true.toString()}
              >
                {/* <CiShoppingCart /> */}
                <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                Add to Cart
              </Button>
            )}
          </ImageButtonContainer>
          <p style={{ fontWeight: 500, color: "var(--color-red-500)" }}>
            {dessertCategory}
          </p>
          <p style={{ fontWeight: 700, color: "var(--color-red-900)" }}>
            {dessertName}
          </p>
          <p style={{ color: "var(--color-red)", fontWeight: 990 }}>
            $ {price.toFixed(2)}
          </p>
        </CardContainer>
      </div>
    </div>
  );
};

export default DessertItem;
