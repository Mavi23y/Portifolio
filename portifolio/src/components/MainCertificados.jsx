import React from 'react';
import './MainCertificados.css';
import certificado from '../assets/js.png';


function MainCertificados() {
  return (
    <div id="certificados">
      <div className="barra"></div>

      <div className="main-certificados">
        <h2>&lt; Certificados /&gt;</h2>
      </div>

      <div className="main-certificados-content">
        
        {/* CERTIFICADO 1 */}
        <a 
          href="file:///C:/Users/User/Downloads/certificado_83652182.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="img-certificado"
        >
          <img src={certificado} alt="Certificado JavaScript" className="imagem-certificado" />
          <div className="overlay">
            <span>Ver Certificado (PDF)</span>
          </div>
        </a>

        {/* CERTIFICADO 2 */}
        <a 
          href="file:///C:/Users/User/Downloads/certificado_83652182.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="img-certificado"
        >
          <img src={certificado} alt="Certificado React" className="imagem-certificado" />
          <div className="overlay">
            <span>Ver Certificado (PDF)</span>
          </div>
        </a>

        {/* CERTIFICADO 3 */}
        <a 
          href="file:///C:/Users/User/Downloads/certificado_83652182.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="img-certificado"
        >
          <img src={certificado} alt="Certificado TIIN" className="imagem-certificado" />
          <div className="overlay">
            <span>Ver Certificado (PDF)</span>
          </div>
        </a>

      </div>
    </div>
  );
}

export default MainCertificados;