import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { initialMovies } from '../../utils/input.js';

function Movies(props) {
  

  return (    
    <section className="Movies">              
      <SearchForm />
      <MoviesCardList movies={ initialMovies } button={'MoviesCard__button_type_like'}/>
      <button type="button" className="Movies__more-button">Ещё</button>
      <Footer />       
    </section>
  );
}

export default Movies;