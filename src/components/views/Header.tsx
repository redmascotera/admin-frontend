
import "../res/scss/tailwind.scss";
import LoginBtn from "./LoginBtn";
import React from "react";

const Header = () => {
    return (
      <React.Fragment>
        <div className="bg-blue-500 text-white p-4 flex items-center justify-between text-xl">
          <div className="flex items-center"> 
            <img src="logoejemplo.png" className="mr-5" alt="Logo Ejemplo" /> 
            Red Mascotera
          </div>
          <LoginBtn/>
        </div>
      </React.Fragment>
    );
  };
  
export default Header;