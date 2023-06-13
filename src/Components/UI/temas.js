import {
    fondoClaro,
    contenidoClaro,
    textoFondoClaro,
    fondoObscuro,
    contenidoObscuro,
    textoFondoObscuro
} from "./variables";

export const temaClaro =  {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    filter: "",
};

export const temaObscuro =  {
    body: fondoObscuro,
    inside: contenidoObscuro,
    text: textoFondoObscuro,
    filter: "invert(100%)",
};
