import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const appElement = document.getElementById("app");

if (appElement) {
  createRoot(appElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Element with id 'app' not found in the document.");
}
