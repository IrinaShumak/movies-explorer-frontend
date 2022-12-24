import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {  

  return (
    <section className="SearchForm">
      <form 
        className="SearchForm__form"
        action="#" 
        method="post" 
        name="SearchForm"
        //onSubmit= {props.handleSubmit}        
      >      
        <input 
          id="search-input" 
          type="search" 
          className="SearchForm__input" 
          name="search"
          placeholder="Фильм" 
          value=''        
        />
      
        <button type="submit" className="SearchForm__button">Поиск</button>      
      </form>
    
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;