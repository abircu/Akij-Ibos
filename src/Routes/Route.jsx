import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/addcart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
