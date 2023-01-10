import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio(props) {
 
  return (    
    <section className="Portfolio">      
      <h2 className="Portfolio__subtitle">Портфолио</h2>
      <div className="Portfolio__projects">   
        <a href="https://irinashumak.github.io/how-to-learn/" className="Portfolio__project" target="_blank">          
          <p className="Portfolio__project-name">Статичный сайт</p>
          <div className="Portfolio__link-arrow" />         
        </a>
        <a href="https://irinashumak.github.io/russian-travel/" className="Portfolio__project" target="_blank">          
          <p className="Portfolio__project-name">Адаптивный сайт</p>
          <div className="Portfolio__link-arrow" />          
        </a>
        <a href="https://irinashumak.github.io/mesto/" className="Portfolio__project" target="_blank">         
          <p className="Portfolio__project-name">Одностраничное приложение</p>
          <div className="Portfolio__link-arrow" />          
        </a>
      </div>
    </section>
  );
}

export default Portfolio;