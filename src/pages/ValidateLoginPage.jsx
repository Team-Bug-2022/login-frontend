import { useState } from "react";
import "../App.css";
import ClassicLogin from "../components/ClassicLogin";
import PalmPrintLogin from "../components/PalmPrintLogin";

const ValidateLoginPage = () => {
  const [loginType, setLogintype] = useState(
    localStorage.getItem("login-type-BBVA")
      ? localStorage.getItem("login-type-BBVA")
      : "CLASSIC");

  const clientName = localStorage.getItem("client-name-BBVA")
    ? ", " + localStorage.getItem("client-name-BBVA")
    : "";

  return (
    <>
      <h3 className="without-margin-top">Hola{clientName}</h3>
      {loginType === "PALMAR_PRINT" ? (
        <PalmPrintLogin></PalmPrintLogin>
      ) : (
        <ClassicLogin></ClassicLogin>
      )}
    </>
  );
};

export default ValidateLoginPage;
