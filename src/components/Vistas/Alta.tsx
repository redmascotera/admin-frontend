import "../res/scss/tailwind.scss";
import React from "react";
import Nav from "./NavLateral";
import Header from "./Header"

const VistaAlta = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="md:flex md:flex-row">
          <Nav />
          <div className="p-4">
            <h1 className="text-2xl rounded-lg bg-indigo-300 p-4 text-center">Alta</h1>
            {/* Contenido de la pagina Alta */}
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default VistaAlta;