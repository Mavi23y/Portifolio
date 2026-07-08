import React from 'react';
import './MainCertificados.css';
import certificado from '../assets/certificado.png';

function MainCertificados() {
  return (
    <div id="certificados">
      <div className="barra"></div>

      <div className="main-certificados">
        <h2>&lt; Certificados /&gt;</h2>
      </div>

      <div className="main-certificados-content">
        <img src={certificado} alt="Certificado 1" className="img-certificado" />
        <img src={certificado} alt="Certificado 2" className="img-certificado" />
        <img src={certificado} alt="Certificado 3" className="img-certificado" />
      </div>
    </div>
  );
}

export default MainCertificados;