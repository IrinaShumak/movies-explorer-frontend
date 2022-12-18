import React from 'react';
import { Link } from 'react-router-dom';

function NavTab(props) {
 
  return (    
    <header className="NavTab">
      <div className="Logo" />
      <nav className="NavTab__links">
        <Link to="/signup" className="NavTab__link">Регистрация</Link>
        <Link to="/signin" className="NavTab__link">
          <button type="button" className="NavTab__entry-button">Войти</button>
        </Link>        
      </nav>
    </header>  
  );
}

export default NavTab;