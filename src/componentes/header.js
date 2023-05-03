import React from "react";

export default function Header(){
    const newLocal = "text";
    return(
    <header>
        <h1>LabeTube</h1>
        <input type={newLocal} placeholder="Busca" id="campoDeBusca" />
    </header>
    )
}