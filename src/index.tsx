import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppointmentStud } from "./screens/AppointmentStud";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppointmentStud />
  </StrictMode>,
);
