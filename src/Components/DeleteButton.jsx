import styled from "styled-components";
const StyledDeleteButton = styled.button`
  padding: 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  & > img {
    transform: scale(1.5);
  }
`;

import React from "react";

const DeleteButton = ({ handleClick }) => {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <img src="assets/images/icon-remove-item.svg" alt="" />
    </StyledDeleteButton>
  );
};

export default DeleteButton;
