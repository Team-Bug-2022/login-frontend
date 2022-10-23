import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthenticationLogin from "./pages/AuthenticationLogin";
import DocumentPage from "./pages/DocumentPage";
import ValidateLoginPage from "./pages/ValidateLoginPage";

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
          element: <ValidateLoginPage />,
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
