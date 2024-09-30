import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import { GlobalStateProvider } from "./GlobalState";


ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalStateProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalStateProvider>
);