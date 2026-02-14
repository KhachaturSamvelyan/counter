import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "@/app/AppRoutes";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>
);
