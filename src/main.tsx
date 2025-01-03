import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./router/AppRouter";
import { AlertHandler } from "./providers/AlertHandler";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertHandler>
      <AppRouter />
    </AlertHandler>
  </StrictMode>,
);
