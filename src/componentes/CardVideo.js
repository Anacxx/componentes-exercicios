import React from "react";
import InfosUsuario from "./InfosUsuario";
export default function CardVideo(props){
     
    const usuario = {
        nome: "Ana Carolina"
    }
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return(
    <div className="box-pagina-principal" onClick={reproduzVideo}>
        <h4>{props.videoConteudo.titulo}</h4>
        <InfosUsuario user = {usuario}/>
    </div>
    )
}