import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={route} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
