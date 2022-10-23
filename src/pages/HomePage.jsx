import React from "react";
import { Grid, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../App.css";

const HomePage = () => {
  return (
    <>
      <Avatar
        sx={{ m: "auto", bgcolor: "#031E3B", width: "80px", height: "80px" }}
      >
        <PersonIcon sx={{ width: "50px", height: "50px" }} />
      </Avatar>

      <h3>Bienvenida a BBVA </h3>

      <Grid container spacing={3} sx={{ mt: "17px" }}>
        <Grid item xs>
          <Avatar sx={{ m: "auto", bgcolor: "#3F8AC1" }}>
            <CompareArrowsIcon />
          </Avatar>
          <p>Transferir</p>
        </Grid>
        <Grid item xs>
          <Avatar sx={{ m: "auto", bgcolor: "#F08548" }}>
            <AddIcon />
          </Avatar>
          <p>Oportunidades</p>
        </Grid>
        <Grid item xs>
          <Avatar sx={{ m: "auto", bgcolor: "#1AB8A7" }}>
            <AttachMoneyIcon />
          </Avatar>
          <p>Retiro sin tarjeta</p>
        </Grid>
      </Grid>
      <Grid container sx={{ m: "auto", mt: "25px" }}>
        <ExpandMoreIcon sx={{ m: "auto" }} />
      </Grid>
      <Grid container sx={{ mt: "17px", bgcolor: "white" }}>
        <Grid item xs>
          <h5 class="accounts">CUENTAS EN PESOS</h5>
          <h4 class="data-accounts">Cuenta express</h4>

          <p class="accounts">12345</p>
        </Grid>
        <Grid item xs>
          <h5 class="accounts">$1000.00</h5>
          <h4 class="accounts">$530.00</h4>

          <p class="accounts">Saldo disponible</p>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
