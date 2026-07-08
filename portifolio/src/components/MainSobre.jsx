import React from 'react';
import './MainSobre.css';
import imagemCodigo from '../assets/codigoEu.png';
import imagemEu from '../assets/fotoEu.png';

function MainSobre() {
  return (
    <div id="sobre">
      <div className="barra"></div>

      <div className="main-sobre">
        <h2>&lt; Sobre Mim /&gt;</h2>
      </div>

      <div className="main-sobre-content">
        <img src={imagemEu} alt="Sobre Mim" />
        <img src={imagemCodigo} alt="Sobre Mim" />
      </div>
    </div>
  );
}

export default MainSobre;