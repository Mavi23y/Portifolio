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

      {/* O JSX chamava essa div de "main-projetos-container", mas no CSS
          a classe que existe é "main-projetos-content" — por isso o gap,
          o flex-direction column etc. definidos no CSS não estavam
          funcionando. Corrigido para bater com o nome do CSS. */}
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