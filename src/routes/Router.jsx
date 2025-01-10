import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Login from "../pages/shared/Login";
import Contact from "../pages/user/Contact";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import ErrorPage from "../pages/shared/ErrorPage";
import Cart from "../pages/user/Cart";
import Profile from "../pages/user/Profile";
import Signup from "../pages/shared/Signup";
import ProtectedRoute from "./ProtectedRoute";
import SellerProfile from "../pages/seller/SellerProfile";
import AddProduct from "../pages/seller/AddProduct";
import PaymentSuccess from "../pages/user/PaymentSuccess";

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
          path: "login",
          element: <Login />
        },
        {
          path: "seller-login",
          element: <Login role="seller" />
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
          path: "seller-signup",
          element: <Signup role="seller" />
        },
        {
          element: <ProtectedRoute />,
          path: "user",
          children: [
            {
              path: "profile",
              element: <Profile />
            },
            {
              path: "cart",
              element: <Cart />
            },
            {
              path: "payment/success",
              element: <PaymentSuccess />
            },
          ]
        },
        {
          element: <ProtectedRoute />,
          path: "seller",
          children: [
            {
              path: "seller-profile",
              element: <SellerProfile />
            },
            {
              path: "add-product",
              element: <AddProduct />
            },
            
          ]
        }
      ]
    },
   
]);

