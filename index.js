import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>this made with parcel</h1>;
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
