import "../res/scss/tailwind.scss";
import React from "react";
import Nav from "./SideNav.tsx";
import Header from "./Header";

const PetTagsView = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="md:flex md:flex-row">
          <Nav />
          <div className="p-4">
            <h1 className="text-2xl rounded-lg bg-indigo-300 p-4 text-center">Chapas</h1>
            {/* Contenido de la pagina Chapas */}
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default PetTagsView;