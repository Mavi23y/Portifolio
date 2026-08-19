import React from 'react';
import './MainProjetos.css';
import imagemDaIlha from '../assets/daIlha.png';
import imagemVilaBaby from '../assets/vilaBaby.png';

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

       <a 
          href="https://github.com/Mavi23y/Da-ilha.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="imagem-container"
        >
          <img src={imagemDaIlha} alt="Projeto Da Ilha" className="imagem-projeto" />
          <div className="overlay">
            <span>Ver no GitHub</span>
          </div>
       </a>

          <div className="card-verde">
            <p>
              Da Ilha é um projeto desenvolvido em equipe durante um hackathon na categoria de Entretenimento e Cultura. A plataforma gamificada foi criada para incentivar o turismo e o comércio local na Grande Florianópolis.
            </p>
          </div>
        </div>

        {/* SEGUNDO PROJETO */}
        <div className="projeto-linha invertido">

        <a 
          href="https://github.com/geve-dev/VILA-BABY-hackathon.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="imagem-container"
        >
          <img src={imagemVilaBaby} alt="Projeto VILA BABY" className="imagem-projeto" />
          <div className="overlay">
            <span>Ver no GitHub</span>
          </div>
       </a>

          <div className="card-verde">
            <p>
             Vila Baby é um projeto desenvolvido em equipe durante um hackathon na categoria de Conexão e Comunidade. A plataforma conecta pais por meio de "micro-vilas" baseadas na fase do bebê, unindo saúde mental e suporte especializado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProjetos;