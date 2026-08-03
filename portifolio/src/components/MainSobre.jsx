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
        {/* Lado Esquerdo: Foto */}
        <img 
          src={imagemEu} 
          alt="Minha Foto" 
          className="foto-perfil" 
        />

        {/* Lado Direito: Código  */}
        <div className="card-codigo">
          <pre>
           <code>
                  <span className="purple">const</span> <span className="blue">developer</span> = &#123;<br />
                  {"  "}nome: <span className="green">"Maria Vitória"</span>,<br />
                  {"  "}formacao: <span className="green">"Técnico em Informática para Internet (SENAI)"</span>,<br />
                  {"  "}foco: <span className="green">"Desenvolvimento Full Stack"</span>,<br />
                  {"  "}estudando: [<span className="green">"Python"</span>, 
                  <span className="green">"Java"</span>],<br />
                  {"  "}objetivo: <span className="green">"Primeira oportunidade na área"</span><br />
                  &#125;;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default MainSobre;