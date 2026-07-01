import './Header.css';

export default function Header() {
  return (
    <header className="header-wave">

      <div className="navBar">
       <section id="sobre">
        <h2>Sobre mim</h2>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
      </section>

      <section id="tecnologias">
        <h2>Tecnologias</h2>
      </section>

      <section id="certificados">
        <h2>Certificados</h2>
      </section>
      </div>


      <div className="header-content">
        <h1 className="title-sejam">SEJAM</h1>
        <h1 className="title-bem-vindos">BEM VINDOS</h1>
        <p className="subtitle">Olá, eu sou [Seu Nome]</p>
        <p className="description">
          Desenvolvedora Full Stack formada em Técnico em Informática.
          Transformo ideias em aplicações web modernas e funcionais.
        </p>
      </div>

      <svg
        className="wave-svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
       <path
  fill="#0b0b0b"
  d="M0,320
     C180,260 320,140 450,40
     C650,-40 850,300 1050,220
     C1250,150 1360,60 1440,0
     L1440,320
     Z"
/>
      </svg>
    </header>
  );
}