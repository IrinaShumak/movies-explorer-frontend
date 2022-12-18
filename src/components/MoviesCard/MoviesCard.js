import React from 'react';

function MoviesCard (props) {  
  
  return (    
    <div className="MoviesCard">      
      <div
        className="MoviesCard__photo" 
        style = {{backgroundImage: `url(${props.movie.thumbnail})`}} 
      />      
      <div className="MoviesCard__description">        
        <div className="MoviesCard__text-container">
          <h2 className="MoviesCard__title">{props.movie.nameRU}</h2>          
          <p className="MoviesCard__duration">{`${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`}</p>            
        </div>
        <button type="button" className={`MoviesCard__button ${props.button}`}/>      
      </div>
    </div>      
  );
}

export default MoviesCard;