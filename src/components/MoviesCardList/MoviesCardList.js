import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';


function MoviesCardList (props) {
  
  return ( 
    <section className="MoviesCardList">      
      {props.movies.map((movieItem) => {
        return (<MoviesCard 
        key={movieItem.id||movieItem.movieId}
        id={movieItem.id||movieItem.movieId} 
        movie = {movieItem}
        type= {props.type}
        button = {props.button}
        savedMovies={props.savedMovies}
        handleCardLike = {props.handleCardLike}
        handleCardUnlike={props.handleCardUnlike}       
        />)
        })
      }         
    </section>
  );
}

export default MoviesCardList;