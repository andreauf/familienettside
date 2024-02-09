import { render } from "react-dom";
import App from "./App";
import { StrictMode } from "react";
import React from "react";

const appElement = document.getElementById("app");

if (appElement) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    appElement
  );
} else {
  console.error("Element with id 'app' not found in the document.");
}
