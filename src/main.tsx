import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StrictMode } from "react";
import React from "react";

const appElement = document.getElementById("app");

if (appElement) {
  render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
    appElement
  );
} else {
  console.error("Element with id 'app' not found in the document.");
}
