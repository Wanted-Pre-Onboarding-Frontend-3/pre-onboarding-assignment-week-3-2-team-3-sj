import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from './redux/store'
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

