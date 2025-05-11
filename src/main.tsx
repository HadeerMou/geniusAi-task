import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Dashboard } from "./components/Dashboard";
import data from "./data.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Dashboard data={data} />
  </StrictMode>
);
