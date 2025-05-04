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
        }
        ]
    },
    {
        path: "/subscription-service-details/:id",
        element: <PrivateRoute>
            <SubscriptionServiceDetails></SubscriptionServiceDetails>
        </PrivateRoute>
    },
    {
        path: "/my-profile",
        element: <PrivateRoute>
            <MyProfile></MyProfile>
        </PrivateRoute>
    },
  ]);

export default router;