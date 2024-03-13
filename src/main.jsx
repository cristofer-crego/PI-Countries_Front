//imports css
import "./index.css";

//imports libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

//imports Components
import App from "./App.jsx";
import store from "./Redux/Store.js";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pi-countriesback.up.railway.app";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
