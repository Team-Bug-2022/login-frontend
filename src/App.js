import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
