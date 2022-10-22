import { CardHeader, CardContent } from "@mui/material";
import { Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <CardHeader title="BBVA" className="card-header"></CardHeader>
      <CardContent className="card-content">
        <Outlet />
      </CardContent>
    </>
  );
};

export default Layout;
