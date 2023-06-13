import styled from "styled-components";

export const Icono = styled.img`
    height: 25px;
    width: 25px;
`;

export const IconoTema = styled(Icono)`
    filter: ${ ( { theme } ) => theme.filter };
`;

export const Boton = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #41d3be;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${ ( { theme } ) => theme.inside };
    color: ${ ( { theme } ) => theme.text };
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;
    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
    }
`;

export const Saldo = styled.div`
    font-weight: 700;
    font-size: 32px;
`;

export const Detalle = styled.span`
    color: #41d3be;
    font-size: 24px;
`;

export const BtnTema = styled.span`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
`;



/*Declaracion de una Variable SC exportable

Primero importamos styled de esta forma:
    import styled from "styled-components";

Luego exportamos la nueva variable Var con su respectiva funcionalidad
    
    export const Var = styled.etiquetaHtml` Propiedad de Estilo de la etiqueta`;

*/

/*Uso de Media Queries en SC
Las Media queries solo se deberan copiar al elemento al que vayan dirigidos
Ejemplo

export const Var = styled.htmlTag`
    Propiedades Estilo
    
    @media (max-width: 800px) {
        Propiedades Estilo
    }
`;

Asi podremos definir las queries de manera directa al elemento que este las requiera

*/
