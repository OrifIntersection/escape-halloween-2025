// Librairies externes
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Composant racine
import Dashboard from "./dashboard.jsx";

// Styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>
);
