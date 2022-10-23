import { Button, Grid, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "../App.css";
import { WhiteFontTheme } from "../components/FontTheme";
import { AuthenticationLogin } from "../pages/AuthenticationLogin";

const ValidateLoginPage = () => {
  const [loginType, setLogintype] = useState(
    localStorage.getItem("login-type-BBVA")
      ? ", " + localStorage.getItem("login-type-BBVA")
      : "CLASIC_LOGIN"
  );
  const [password, setPassword] = useState("");
  const [clientName, setClientName] = useState(
    localStorage.getItem("client-name-BBVA")
      ? ", " + localStorage.getItem("client-name-BBVA")
      : ""
  );

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    console.log("login");
  };

  return (
    <>
      <h3>Hola {clientName}</h3>
      <ThemeProvider theme={WhiteFontTheme}>
        <Grid container justifyContent="center" direction="row">
          <Grid item xs={12} className="margin-bottom">
            <TextField
              id="filled-basic"
              label="Contraseña"
              variant="filled"
              size="small"
              value={password}
              fullWidth
              onChange={handleChangePassword}
              type="password"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
      <Button
        size="small"
        variant="contained"
        className="button-border"
        onClick={login}
      >
        Ingresar
      </Button>
    </>
  );
};

export default ValidateLoginPage;
