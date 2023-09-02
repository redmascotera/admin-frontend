import React from "react";
import baseSTyles from "./App.module.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={baseSTyles["App"]}>
      <header className={baseSTyles["App-header"]}>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
