import React from "react";
import styled from "styled-components";
const StyledNoItemInCart = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const NoItemInCart = () => {
  return (
    <StyledNoItemInCart>
      <img src="assets/images/illustration-empty-cart.svg" alt="" />
      <p>Your added items will appear here</p>
    </StyledNoItemInCart>
  );
};

export default NoItemInCart;
