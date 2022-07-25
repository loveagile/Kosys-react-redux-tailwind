import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { LayoutComponent } from "./components";
import store from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutComponent>
          <AppRoutes />
        </LayoutComponent>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
