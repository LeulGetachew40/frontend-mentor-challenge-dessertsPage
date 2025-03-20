import React, { useEffect, useState } from "react";
import DessertItem from "./DessertItem";
import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";
// import { useQuery } from "@tanstack/react-query";
// import { getDesserts } from "../services/dessertsApi";
const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
`;
const DessertMenu = () => {
  const [desserts, setDesserts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getDesserts() {
      try {
        const response = await fetch("http://localhost:8080/desserts");
        const data = await response.json();

        setDesserts(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getDesserts();
  }, []);
  if (error) {
    return (
      <div>
        <p>An error occured while fetching your data</p>
      </div>
    );
  }
  if (desserts) {
    return (
      <>
        <div>
          <Header>Desserts</Header>
          <ItemsContainer>
            {desserts.map((dessert) => {
              return <DessertItem item={dessert} key={dessert.id} />;
            })}
          </ItemsContainer>
        </div>
      </>
    );
  }
  return null;
};

export default DessertMenu;
