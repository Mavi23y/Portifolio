import React from 'react';
import './MainProjetos.css';
import imagemProjetos from '../assets/projetos.png';

function MainProjetos() {
  return (
    <div id="projetos">
      <div className="barra"></div>

      <div className="main-projetos">
        <h2>&lt; Projetos /&gt;</h2>
      </div>
      
      <div className="main-projetos-content">
        {/* PRIMEIRO PROJETO */}
        <div className="projeto-linha">
          <img src={imagemProjetos} alt="Projeto 1" className="imagem-projeto" />
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
          <img src={imagemProjetos} alt="Projeto 2" className="imagem-projeto" />
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