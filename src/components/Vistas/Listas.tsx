import "../res/scss/tailwind.scss"
import Nav from "./NavLateral";
import Header from "./Header";
import React from "react";

const VistaListas = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="md:flex md:flex-row">
          <Nav />
          <div className="p-4">
            <h1 className="text-2xl rounded-lg bg-indigo-300 p-4 text-center">Listas</h1>
            {/* Contenido de la pagina Listas */}
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default VistaListas;