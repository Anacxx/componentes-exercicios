import React from "react";
import imagem from "../componentes/bla.png"
export default function InfosUsuario(){
    return(
    <figure>
         <img src={imagem} title="Nome de Usuário"/>
         <figcaption>Nome</figcaption>
    </figure> 
    )
}