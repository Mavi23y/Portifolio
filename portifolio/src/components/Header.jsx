import './Header.css';

export default function Header() {
  return (
    <header className="header-wave">
      <nav className="navBar">
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#certificados">Certificados</a>
      </nav>

     <div className="header-content">
        <h1 className="title-sejam">SEJAM</h1>
        <h1 className="title-bem-vindos">
          BEM <span className="text-vindos">VINDOS</span>
        </h1>
        <p className="subtitle">Olá, eu sou a Maria Vitória</p>
        <p className="description">
          Desenvolvedora Full Stack formada em Técnico em Informática para internet.
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