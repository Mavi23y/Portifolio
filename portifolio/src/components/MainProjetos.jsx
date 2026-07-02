import React from 'react';
import './MainProjetos.css';
import imagemProjetos from '../assets/projetos.png';

function MainProjetos() {
  return (
    <div> 
      <div className="barra"></div>
      
      <div className="main-projetos">
        <h2>&lt;Projetos /&gt;</h2> 
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="main-projetos-container">
        
        {/* PRIMEIRO PROJETO  */}
        <div className="projeto-linha">
          <img src={imagemProjetos} alt="Projetos" className="imagem-projeto" />

          <div className="card-verde">
            <p>
              "O sistema funciona muito bem, é moderno e atualizado. 
              Qualquer dúvida vindo das utilidades do site/app são 
              atendidas com informações bem práticas".
            </p>
          </div>
        </div>

        {/* SEGUNDO PROJETO */}
        <div className="projeto-linha invertido">
          <img src={imagemProjetos} alt="Projetos" className="imagem-projeto" />

          <div className="card-verde">
            <p>
              "O sistema funciona muito bem, é moderno e atualizado. 
              Qualquer dúvida vindo das utilidades do site/app são 
              atendidas com informações bem práticas".
            </p>
          </div>
        </div>

      </div>
    </div> 
  );   
}

export default MainProjetos;