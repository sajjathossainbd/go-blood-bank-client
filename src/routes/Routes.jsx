import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Blogs from "../pages/blogs/Blogs";
import ErrorPage from "../pages/ErrorPage";
import BloodDonation from "../pages/bloodDonation/BloodDonation";
import BloodDonationDetails from "../pages/bloodDonation/BloodDonationDetails";
import MyDonation from "../pages/dashboard/donor/MyDonation";
import CreateDonation from "../pages/dashboard/donor/CreateDonation";
import DashboardLayout from "../layout/DashboardLayout";
import HomeStatistics from "../pages/dashboard/common/HomeStatistics";
import Profile from "../pages/dashboard/common/Profile";
import Search from "../pages/search/Search";
import BlogDetails from "../pages/blogs/BlogDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/donation-requests",
        element: <BloodDonation />,
      },
      {
        path: "/blood-donation-details/:id",
        element: (
          <PrivateRoute>
            <BloodDonationDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // COMMON ROUTES
      {
        index: true,
        element: <HomeStatistics />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      // DONOR ROUTES
      {
        path: "create-donation-request",
        element: <CreateDonation />,
      },
      {
        path: "my-donation-requests",
        element: <MyDonation />,
      },
      {
        path: "create-donation",
        element: <CreateDonation />,
      },
    ],
  },
]);

export default router;
