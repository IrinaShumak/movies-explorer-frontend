import React from 'react';

function MoviesCard (props) { 
  const isLiked = props.savedMovies?.some(i => i.movieId === props.id);
  const cardLikeButtonClassName = (
    `${props.button} ${isLiked &&(props.type !== 'saved') && 'MoviesCard__button_type_like_active'}`
  );
  const image = (
    `${(props.type === 'saved') ? `url(${props.movie.image})` : `url(https://api.nomoreparties.co/${props.movie.image.url})`}`
  );
 
  function handleLike () {
    if  (!isLiked) {   
    props.handleCardLike(props.movie);
    } else {
      const cardForDeletion = props.savedMovies.filter(i => i.movieId === props.id);      
      props.handleCardUnlike(cardForDeletion[0]._id, props.id);     
    }
  }
  
  return (    
    <div className="MoviesCard">
      <a href={`${props.movie.trailerLink}`} className="MoviesCard__photo" target="_blank">      
        <div
          className="MoviesCard__photo" 
          style = {{backgroundImage: image}} 
        />
      </a>    
      <div className="MoviesCard__description">        
        <div className="MoviesCard__text-container">
          <h2 className="MoviesCard__title">{props.movie.nameRU}</h2>          
          <p className="MoviesCard__duration">{`${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`}</p>            
        </div>
        <button type="button" className={`MoviesCard__button ${cardLikeButtonClassName}`} onClick={handleLike}/>      
      </div>
    </div>      
  );
}

export default MoviesCard;