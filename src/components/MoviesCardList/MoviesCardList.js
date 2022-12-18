import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';


function MoviesCardList (props) {
  
  return ( 
    <section className="MoviesCardList">      
      {props.movies.map((movieItem) => {
        return (<MoviesCard 
        key={movieItem.movieId} 
        movie = {movieItem}
        button = {props.button}         
        />)
        })
      }         
    </section>
  );
}

export default MoviesCardList;