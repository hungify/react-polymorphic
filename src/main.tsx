import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "#/components/ui/provider";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
