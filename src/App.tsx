import React from "react";
import baseSTyles from "./App.module.scss";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      navigate('/chapas'); // Redirige a /chapas solo si la ruta es "/"
    }
  }, [location, navigate]);

  return (
    <div className={baseSTyles["App"]}>
      <header className={baseSTyles["App-header"]}>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
