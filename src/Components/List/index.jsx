import React from "react";
import { Box, Boton } from "../UI";
import { lista } from "../../info"
import Card from "../Card";



const Lista = () => {
    console.log(lista);

    return (
        <Box>
            {
                lista.cargos.map( ( cargo, i ) => {
                    return <Card key={ i } cargo={ cargo } />
                    
                } )
            }
            <Boton>Ver mas</Boton>
        </Box>
    )
}

export default Lista;