import React from 'react';
import './MainSobre.css';
import imagemEu from '../assets/joana.jpg';

function MainSobre() {
  return (
    <div id="sobre">
      <div className="barra"></div>

      <div className="main-sobre">
        <h2>&lt; Sobre Mim /&gt;</h2>
      </div>

      <div className="sobre-mim-conteudo">
        {/* Lado Esquerdo: Foto com formato orgânico */}
        <img 
          src={imagemEu} 
          alt="Minha Foto" 
          className="foto-perfil" 
        />

        {/* Lado Direito: O bloco de código estilizado */}
        <div className="card-codigo">
          <pre>
            <code>
              <span className="purple">const</span> <span className="blue">developer</span> = &#123;<br />
              {"  "}Nome: <span className="green">"Maria Vitória"</span>,<br />
              {"  "}Formacao: <span className="green">"Técnico em Informática para internet"</span>,<br />
              {"  "}Foco: <span className="green">"Desenvolvimento Full Stack"</span>,<br />
              {"  "}Estudando: <span className="green">"React"</span>, <span className="green">"Python"</span>,<br />
              {"  "}Objetivo: <span className="green">"Primeira oportunidade na área"</span><br />
              &#125;;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default MainSobre;