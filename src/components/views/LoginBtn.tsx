import "../res/scss/tailwind.scss"
import IconoLogout from "../res/js/logoutIcon.tsx";
import React from "react";

const LoginBtn = () => {
    return (
        <React.Fragment>
            <div className="flex items-center justify-between">
                <a href="#">
                    <div className="flex items-center justify-between hover:bg-blue-400 rounded-lg p-1">
                        <img className="w-10 h-10" src="public/user.png"></img>
                        <div className="text-center md:text-left mr-4 ml-4">
                            <div className="text-black dark:text-white">
                                Nombre 
                            </div>
                            <div className="text-black dark:text-white">
                                Administrador?
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <IconoLogout color="red" size={30}/>
                </a>
            </div>
        </React.Fragment>
        );
      };
      
      export default LoginBtn;