import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { colorPrimario } from "../UI/variables";

console.log(colorPrimario);

/*Declarando una Propiedad de SC en una Variable
Al declarar una variable, con letra inicial en mayus, y a esta le asignamos su valor styled.etiqueta, 
transformamos esta variable en una etiqueta con dicha funcion, el la cual le pondremos
los estilos con las ` ` que simularan un archivo css dentro de Javascript

  Var = styled.etiqueta` estilos deseados `;

  <Var>
    contenido de la etiqueta
  </Var>

  se pueden anidar mas de estas varialbes etiqueta una dentro de la otra

  <Var>
    <Var2>
      contenido de la etiqueta
    </Var>
  </Var>

*/

const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  `;

const Logo = styled.img`
  height: 50px;
  width: 50px; 
`; 

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${ ( { primary } ) => primary ? "white" : colorPrimario };//Version destructurada
  background: ${ ( props ) => props.primary ? "transparent" : "white" };//Version sin destructurar
`;

/*Empleo de Props para mejorar manejo de estilos
Al usar props en los styled nos facilitara la vida al momento de programar ya que podremos 
manejar de mejor forma determinados estilos 
*/

const Header = () => {
  return (
    <StyleHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader primary href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyleHeader>
  );
};

export default Header;
