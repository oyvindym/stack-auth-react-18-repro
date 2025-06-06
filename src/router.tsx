import App from "./pages/App";
import { createBrowserRouter } from "react-router-dom";
import { StackHandlerRoutes } from "./app/auth/StackHandlerRoutes";

export const router = createBrowserRouter(
  [
    { path: "/handler/*", element: <StackHandlerRoutes />},
    { path: "/", element: <App />},
  ]
);