import React from "react";
import DessertMenu from "./Components/DessertMenu";
import GlobalStyles from "./Styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./Components/StyledMain";
import Cart from "./Components/Cart";
import store from "./store";
import { Provider as ReduxProvider } from "react-redux";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { getOrderItems } from "./features/orderSlice";
import OrderConfirmation from "./Components/OrderConfirmation";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Main>
            <DessertMenu />
            <Cart />
          </Main>
        </QueryClientProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
