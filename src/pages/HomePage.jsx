import { useEffect } from "react";
import { Grid, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../App.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const clientName = localStorage.getItem("client-name-BBVA")
    ? ", " + localStorage.getItem("client-name-BBVA")
    : "";

  const validateClientId = () => {
    if (!localStorage.getItem("client-token-BBVA")) {
      navigate("/document-login", { replace: true });
    }
  };

  useEffect(() => {
    validateClientId();
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <Avatar
        sx={{ m: "auto", bgcolor: "#031E3B", width: "80px", height: "80px" }}
      >
        <PersonIcon sx={{ width: "50px", height: "50px" }} />
      </Avatar>
      <h3>Bienvenido a BBVA{clientName}</h3>
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
      <Grid container sx={{ p: "0.5", bgcolor: "white" }}>
        <Grid item xs>
          <p className="accounts">Cuentas</p>
          <h4 className="accounts">AHORROS</h4>
          <h4 className="data-accounts">CTS</h4>
        </Grid>
        <Grid item xs>
          <p className="accounts">Saldo disponible</p>
          <h4 className="accounts">S/. 1000.00</h4>
          <h4 className="data-accounts">S/. 530.00</h4>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
