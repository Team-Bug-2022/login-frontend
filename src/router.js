import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import DocumentPage from "./pages/DocumentPage";
import ValidateLogin from "./pages/ValidateLogin";
import AuthenticationLogin from "./pages/AuthenticationLogin";

export const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "document-login",
          element: <DocumentPage />,
        },
        {
          path: "validate-login",
          element: <ValidateLogin />,
        },
        {
          path: "authentication-login",
          element: <AuthenticationLogin />,
        },
        { path: "", element: <Navigate to="/document-login" /> },
      ],
    },
  ]);
};
