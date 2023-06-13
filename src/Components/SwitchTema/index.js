import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ( { tema } ) => {
    const claro = <Icono src={ themeOn } alt="Tema claro"/>
    const obscuro = <Icono src={ themeOff } alt="Tema obscuro"/>

    return <> { tema ? obscuro : claro } </>
};