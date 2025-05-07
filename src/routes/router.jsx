import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import SubscriptionServiceDetails from "../pages/SubscriptionServiceDetails";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import ForgotPassword from "../pages/ForgotPassword";
import MySubscription from "../pages/MySubscription";

const router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('/subscriptionData.json'),
            hydrateFallbackElement: <Loading></Loading>
        }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
        {
            path: "/auth/register",
            Component: Register
        },
        {
            path: "/auth/login",
            Component: Login
        },
        {
            path: "/auth/forgot-password",
            Component: ForgotPassword
        }
        ]
    },
    {
        path: "/subscription-details/:id",
        element: <PrivateRoute>
            <SubscriptionServiceDetails></SubscriptionServiceDetails>
        </PrivateRoute>,
        loader: () => fetch('/subscriptionData.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: "/my-profile",
        element: <PrivateRoute>
            <MyProfile></MyProfile>
        </PrivateRoute>
    },
    {
        path: "my-subscription",
        element: <PrivateRoute>
            <MySubscription></MySubscription>
        </PrivateRoute>
    }
  ]);

export default router;