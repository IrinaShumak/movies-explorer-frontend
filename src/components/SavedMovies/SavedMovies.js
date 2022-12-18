import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { savedMovies } from '../../utils/input.js';

function SavedMovies(props) {
  

  return (    
    <section className="Movies">              
      <SearchForm />
      <MoviesCardList movies={ savedMovies } button={'MoviesCard__button_type_delete'}/>      
      <Footer />       
    </section>
  );
}

export default SavedMovies;