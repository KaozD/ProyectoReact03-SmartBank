import styled from "styled-components"

const Title = styled.h1`
  color: grey;
  padding: 25px 0;
`

//const Title = ({ children }) => {
// return <h1 className="title">{children}</h1>;
//};

export default Title;

/*Declarando una Variable tipo SC exportable
  Al importar la paqueteria de Styled Components podremos a una variable determinada
  darle las funciones de un archivo CSS, y asi reemplazar el uso de etiquetas con su
  respectiva clase, por un solo elemento que funja esa funcion.
  
    import styled from "styled-components"  asi llamos a la paqueteria

        const Title = styled.h1`  y asi declaramos la variable con su respectiva funcion
          color: grey;
          padding: 25px 0;
        `  
  Ya despues solo deberemos reemplazar la etiqueta con su clase por esta nueva variable y veremos
  los cambios que hayamos declarado con respecto a sus estilos
*/
