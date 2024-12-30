import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Register from "../pages/shared/Register";
import Login from "../pages/shared/Login";
import Contact from "../pages/user/Contact";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import ErrorPage from "../pages/shared/ErrorPage";
import Cart from "../pages/user/Cart";
import Profile from "../pages/user/Profile";
import Signup from "../pages/shared/Signup";

export const router = createBrowserRouter([
    {
      path: "",
      element: <UserLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "productDetails/:id",
          element: <ProductDetails />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          // element: <ProtectedRoute />,
          path: "user",
          children: [
            {
              path: "profile",
              element: <Profile />
            }
          ]
        }
      ]
    },
   
]);

