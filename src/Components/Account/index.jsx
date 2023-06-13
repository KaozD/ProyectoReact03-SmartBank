import React, { useState } from "react";
import styled from "styled-components";
import { Icono, Boton, Box, Saldo, Detalle, IconoTema } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconoMargen = styled(Icono)`
  margin-top: 2px;
`;
/* Herencia de Estilos
Con Styled Components podemos realizar herencia de propiedades de elementos padre a elementos hijo
con el fin que las propiedades de uno se conserven en el otro, aun si el elemento hijo tenga sus
exclusivas y para eso primero deberemos
    importat style: 
      import styled from "styled-components";
    despues generar la variable hijo y en la parte styled en vez de asignarle un valor etiqueta
    le enviaremos la variable padre de esta forma:
      
      VarHijo = styled( VarPadre )` Propiedades de Hijo `;

    Asi las propiedades de padre seguiran presentes en hijo y este podra tener sus propiedades sin afectar 
    a las de padre.  

    Ya despues solo debemos ingresar en donde vayamos a usar la variable hijo declarando su etiqueta

      <VarHijo>      o    <VarHijo />  sea el caso
      </VarHijo>

*/


const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Boton onClick={toggleHandler}>
        <IconoMargen
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Boton>
    </Box>
  );
};

export default Account;
