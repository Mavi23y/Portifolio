import React from 'react';
import './Footer.css';
import githubIcon from '../assets/gitHub.png'; 
import linkedinIcon from '../assets/linkedin.webp';
import gmailIcon from '../assets/gmail.webp';
import discordIcon from '../assets/discord.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="diagonal-clip"></div>

      <div className="footer-container">
        <h2 className="footer-title">&lt; Redes sociais /&gt;</h2>
        
        {/*Redes Sociais */}
        <div className="social-icons">

          <a href="https://github.com/Mavi23y" target="_blank" rel="noreferrer" className="icon-link">
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/maria-vit%C3%B3ria-barizon-alves-614b98387" target="_blank" rel="noreferrer" className="icon-link">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maria.v.barizon@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-link"
            >
              <img src={gmailIcon} alt="Gmail" />
            </a>

            <a 
              href="https://discord.com/users/1408483657269776434" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-link"
            >
              <img src={discordIcon} alt="Discord" />
            </a>      

        </div>
        
        <p className="copyright-text">
          Copyright &copy; 2026; Maria Vitória Barizon Alves. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}