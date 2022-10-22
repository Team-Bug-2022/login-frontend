import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router";
import "./App.css";
import { Card, Grid } from "@mui/material";

function App() {
  return (
    <div className="app">
      <Grid container justifyContent="center">
        <Grid item xs={12} style={{ margin: "1rem" }}>
          <Card className="card">
            <Router>
              <AppRouter />
            </Router>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
