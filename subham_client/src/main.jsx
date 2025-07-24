import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);