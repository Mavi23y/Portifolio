import React, { useState, useEffect } from 'react';
import './Scroll.css'; 

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  // Monitora a posição 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função que rola a página para o topo
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button 
          onClick={scroll} 
          className="scroll"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </>
  );
}