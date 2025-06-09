import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CalcContextProvider } from "./calcContext/CalcContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CalcContextProvider>
    <App />
  </CalcContextProvider>
  // </StrictMode>
);
