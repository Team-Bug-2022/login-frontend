import { Button, Grid } from "@mui/material";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "../App.css";
import { palmarPrintLogin } from "../services/LoginService";
import { useNavigate } from "react-router-dom";

const PalmPrintLogin = () => {
  const webcamVar = useRef(null);
  const [imgVar, setImgVar] = useState(null);
  const navigate = useNavigate();

  const capture = () => {
    setImgVar(webcamVar.current.getScreenshot());
  };

  const callLogin = () => {
    const img = document.getElementById("palm-print");

    fetch(img.src)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image");
        palmarPrintLogin(file).then(
          (data) => {
            if (data && data.status === 1) {
              if (data.data.token)
                localStorage.setItem("client-token-BBVA", data.data.token);
              navigate("/home", { replace: true });
            } else {
              console.log("Error en el login");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      });
  };

  return (
    <>
      <Grid container justifyContent="center" direction="row">
        <Grid item xs={12} className="margin-bottom">
          <Webcam
            audio={false}
            ref={webcamVar}
            width={280}
            className="webcam"
          />
        </Grid>
      </Grid>
      <Button
        size="small"
        variant="contained"
        className="button-border margin-bottom"
        onClick={capture}
      >
        Capturar
      </Button>
      {imgVar && (
        <>
          <Grid item xs={12} className="margin-bottom">
            <img alt="palm-print" id="palm-print" src={imgVar} />
          </Grid>
          <Button
            size="small"
            variant="contained"
            className="button-border margin-bottom"
            onClick={callLogin}
          >
            Ingresar
          </Button>
        </>
      )}
    </>
  );
};

export default PalmPrintLogin;
