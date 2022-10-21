import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        { path: "", element: <Navigate to="/login" /> },
      ],
    },
  ]);
};
