import { useState } from "react";
import "../App.css";
import ClassicLogin from "../components/ClassicLogin";
import PalmPrintLogin from "../components/PalmPrintLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ValidateLoginPage = () => {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState(
    localStorage.getItem("login-type-BBVA")
      ? localStorage.getItem("login-type-BBVA")
      : "CLASSIC"
  );

  const clientName = localStorage.getItem("client-name-BBVA")
    ? ", " + localStorage.getItem("client-name-BBVA")
    : "";

  const validateClientId = () => {
    if (!localStorage.getItem("client-id-BBVA")) {
      navigate("/document-login", { replace: true });
    }
  };

  useEffect(() => {
    validateClientId();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3 className="without-margin-top">Hola{clientName}</h3>
      {loginType === "PALMAR_PRINT" ? (
        <>
          <h4>Toma una foto de tu Huella Palmar</h4>
          <PalmPrintLogin></PalmPrintLogin>
        </>
      ) : (
        <>
          <h4>Ingresa tu Contraseña</h4>
          <ClassicLogin></ClassicLogin>
        </>
      )}
      <br></br>
      <a
        onClick={() =>
          setLoginType(loginType === "CLASSIC" ? "PALMAR_PRINT" : "CLASSIC")
        }
      >
        Utilizar autenticación por{" "}
        {loginType === "CLASSIC" ? "Huella Palmar" : "Contraseña"}
      </a>
    </>
  );
};

export default ValidateLoginPage;
