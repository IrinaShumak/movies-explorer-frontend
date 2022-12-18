import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {  
  return(
    <nav className={`Header__links Header__links_location_${props.location}`}>
      {(props.isOpen)&&(<button type="button" className="BurgerMenu__close-btn" onClick={props.onClose} />)}
      <div className="Header__main">
        {(props.location === 'outside') && 
        (<Link to="/" className={`Header__link Header__link_${props.location}`}>Главная</Link>)}
        {(!props.isOpen)
        ?(<>
            <Link to="/movies" className={`Header__link Header__link_${props.location}`}>Фильмы</Link>
            <Link to="/saved-movies" className="Header__link">Сохранённые фильмы</Link>
          </>)
        : (<>
          <Link to="/movies" className={`Header__link Header__link_${props.location}`}>
            <button type="button" class="Navigation__button" onClick={props.onClose}>Фильмы</button>
          </Link>
          <Link to="/saved-movies" className="Header__link">
          <button type="button" class="Navigation__button" onClick={props.onClose}>Сохранённые фильмы</button>
          </Link>
        </>)}
      </div>       
      {(!props.isOpen) 
        ? (<Link to="/profile" className="Header__link">
            <button type="button" className="Header__entry-button">Аккаунт</button>
          </Link>)      
        : (
            <Link to="/profile" className="Header__link">
              <button type="button" className="Header__entry-button" onClick={props.onClose}>Аккаунт</button>
            </Link>
          )}
    </nav>    
  )
}

export default Navigation;