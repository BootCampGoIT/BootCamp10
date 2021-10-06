import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.module.css";
import { BrowserRouter } from "react-router-dom";

// console.dir(BrowserRouter)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
