import { Button, Grid, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { WhiteFontTheme } from "../components/FontTheme";
import { login } from "../services/LoginService";

const ClassicLogin = () => {
  const [password, setPassword] = useState("");

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const callLogin = () => {
    const loginDto = {
      _id: localStorage.getItem("client-id-BBVA"),
      password: password,
    };
    login(loginDto).then(
      (data) => {
        if (data && data.status === 1) {
          console.log("Login exitoso");
        } else {
          console.log("Error en el login");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
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
        onClick={callLogin}
      >
        Ingresar
      </Button>
    </>
  );
};

export default ClassicLogin;
