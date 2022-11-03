import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

fetch("/plugins/plugins.json").then(async (r) => {
  const data = await r.json();
  console.log(data);
  const module = await import(data.module);
  console.log(module.config);
  console.log(module.PanelRenderer);
  const { PanelRenderer } = module;

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <PanelRenderer />
      <App />
    </React.StrictMode>
  );
});
