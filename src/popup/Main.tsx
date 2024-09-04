import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup";
import '../styles/index.css'

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
