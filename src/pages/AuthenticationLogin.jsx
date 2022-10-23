import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "../App.css";

const AuthenticationLogin = () => {
  const webcamVar = useRef(null);
  const [imgVar, setImgVar] = useState(null);

  const capture = useCallback(() => {
    const imgVar = webcamVar.current.getScreenshot();
    setImgVar(imgVar);
  }, [webcamVar, setImgVar]);

  return (
    <>
      <h3>METODO DE AUTENTICACION PALMAR </h3>
      <p>
        Activa tu Token Digital y tu modo de ingreso con autenticacion palmar en
        este dispositivo.
      </p>
      <Webcam
        audio={false}
        ref={webcamVar}
        height={300}
        width={300}
        screenshotFormat="image/png"
      />
      <br />
      <div class="capture">
        <a
          onClick={capture}
          href={imgVar}
          download="palma-autenticacion"
          class="capturePalm"
        >
          TOMAR FOTO
        </a>
      </div>
    </>
  );
};

export default AuthenticationLogin;

/*<button onClick={capture}>Capture photo</button>

      <a href={imgSrc} download="captura">
        Descargar captura
      </a> */
