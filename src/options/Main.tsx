import React from "react";
import ReactDOM from "react-dom/client";
import Options from "./Options";
import "../styles/index.css";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
