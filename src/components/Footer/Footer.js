import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
 
  return (    
    <footer className="Footer">
      <p className="Footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="Footer__info">
        <p className="Footer__copyright">&copy; 2020</p>
        <nav className="Footer__links">
          <Link className="Footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</Link>
          <Link className="Footer__link" href="https://github.com/IrinaShumak?tab=repositories" target="_blank">Github</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;