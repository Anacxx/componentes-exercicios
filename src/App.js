import React from "react";
import "./styles.css";
import Header from "./componentes/header";
import CardVideo from "./componentes/CardVideo";
import InfosUsuario from "./componentes/InfosUsuario";
export default function App() {
  //const titulo = "Título do vídeo";

  //function reproduzVideo() {
   // alert("O vídeo está sendo reproduzido");
 // }
  return (
    <div>
      <div className="tela-inteira">
        <Header/>
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
