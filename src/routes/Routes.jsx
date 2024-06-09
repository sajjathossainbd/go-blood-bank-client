import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Blogs from "../pages/blogs/Blogs";
import DashboardRoot from "../pages/dashboard/DashboardRoot";
import ErrorPage from "../pages/ErrorPage";
import BloodDonation from "../pages/bloodDonation/BloodDonation";
import BloodDonationDetails from "../pages/bloodDonation/BloodDonationDetails";

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
        path: "/donation-requests",
        element: <BloodDonation />,
      },
      {
        path: "/blood-donation-details/:id",
        element: <BloodDonationDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/dashboard",
        element: <DashboardRoot />,
      },
    ],
  },
]);

export default router;
