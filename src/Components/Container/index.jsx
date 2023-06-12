import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";

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


const StyleContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyleContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    
  @media (max-width: 800px) {
      flex-direction: column;  
  }
`;



const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyleContent>
        <Account />
      </StyleContent>
    </StyleContainer>
  );
};

export default Container;
