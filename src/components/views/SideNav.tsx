import "../res/scss/tailwind.scss"
import IconoLista from "../res/js/listIcon.tsx";
import IconoAlta from "../res/js/signupIcon.tsx";
import IconoChapa from "../res/js/petTagsIcon.tsx";
import React from "react";

const SideNav = () => {
    return (
      <React.Fragment>
        <div className="flex justify-center">
          <ul className="flex flex-wrap md:flex-col m-2 ">
            <a href="./chapas" className="m-1 p-4 flex items-center hover:text-sky-500 hover:bg-sky-100 rounded-xl">
              <IconoChapa color="grey" size={20} />
              <span className="ml-2">Chapitas</span>
            </a>
            <a href="./lista" className="m-1 p-4 flex items-center hover:text-sky-500 hover:bg-sky-100 rounded-xl">
              <IconoLista color="grey"  size={20} />
              <span className="ml-2">Listas</span>
            </a>
            <a href="./altas" className="m-1 p-4 flex items-center hover:text-sky-500 hover:bg-sky-100 rounded-xl">
              <IconoAlta color="grey"  size={20}/> 
              <span className="ml-2">Altas</span>
            </a>
          </ul>
        </div>
      </React.Fragment>
    );
  };
  
  export default SideNav;