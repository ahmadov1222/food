import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/main.scss";
import FoodContextProvider from "./context/FoodContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </Router>
  </React.StrictMode>
);
