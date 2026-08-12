import React from 'react';
import './MainCertificados.css';
import certificado from '../assets/jsCortada.png';
// import certificado from '../assets/TiinCortada.png';
// import certificado from '../assets/RcCortada.png';

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
          href="https://drive.google.com/drive/folders/16_LUfNzdmHbv6ubuVzwYO3I0G84QowiU?usp=sharing" 
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
          href="https://drive.google.com/drive/folders/16_LUfNzdmHbv6ubuVzwYO3I0G84QowiU?usp=sharing" 
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
          href="https://drive.google.com/drive/folders/16_LUfNzdmHbv6ubuVzwYO3I0G84QowiU?usp=sharing" 
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