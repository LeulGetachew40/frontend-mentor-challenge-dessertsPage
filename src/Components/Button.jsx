import React from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  border-radius: calc(infinity * 1px);

  height: 30px;

  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: lighter;
  cursor: pointer;

  ${(props) => {
    return css`
      width: ${props.width};
    `;
  }}

  ${(props) => {
    return css`
      background-color: ${props.backgroundcolor};
    `;
  }}

${(props) => {
    return css`
      color: ${props.color};
    `;
  }}
${(props) => {
    if (props.isdessertitem) {
      return css`
        transform: scale(1.5) translateY(-10px);
        border: 1px solid var(--color-red-900);
      `;
    } else {
      return css`
        transform: scale(1.5);
        border: none;
      `;
    }
  }}

  &:hover {
    background-color: var(--color-red-300);
    color: var(--color-red-50);
  }
`;
const Button = ({
  backgroundColor,
  isDessertItem,
  color,
  width,
  children,
  handleClick,
}) => {
  return (
    <StyledButton
      width={width}
      backgroundcolor={backgroundColor}
      onClick={handleClick}
      color={color}
      isdessertitem={isDessertItem}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
