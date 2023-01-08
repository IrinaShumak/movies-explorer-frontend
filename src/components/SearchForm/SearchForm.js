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
        onSubmit= {props.handleSubmit}
        noValidate     
      >      
        <input 
          id="search-input" 
          type="search" 
          className="SearchForm__input" 
          name="search"
          placeholder="Фильм" 
          value={props.search || ''}
          onChange={props.onChange}
          required       
        />
      
        <button type="submit" className="SearchForm__button">Поиск</button>      
      </form>
      <span className={`Input-error Input-error_place_search`}>{props.searchError}</span>
      <FilterCheckbox isChecked={props.isChecked} onChange={props.handleCheckbox}/>
    </section>
  );
}

export default SearchForm;