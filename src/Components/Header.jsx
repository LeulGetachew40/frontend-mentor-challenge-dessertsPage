import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-family: "Red Hat Text";
`;
const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
