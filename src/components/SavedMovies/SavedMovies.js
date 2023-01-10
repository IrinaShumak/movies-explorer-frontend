import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function SavedMovies(props) {
  
  const [search, setSearch] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');
  const [searchResult, setSearchResult] = React.useState('');  
  const [movies, setMovies] = React.useState(props.savedMovies);

  function handleSearchChange(e) {
    setSearch(e.target.value);    
  }

  function handleCheckbox () {
    setIsChecked((active) => !active);
    defineRenderDetails (!isChecked);
  } 

  function defineRenderDetails (shortFilms) {
    let moviesList = props.savedMovies.filter(c => c.nameRU.toLowerCase().includes(search.toLowerCase())&&((shortFilms&&c.duration<41)||(!shortFilms)));      
    if (moviesList.length === 0) {
      setSearchResult('Ничего не найдено')
    } else {
      setMovies(moviesList)
      setSearchResult('');
    }
  }
  
  React.useEffect(() => {
    setMovies(props.savedMovies);
    }, [props.savedMovies]);
  

  function handleSearchSubmit(e){
    e.preventDefault();    
    if (e.target.closest("form").checkValidity()){      
      setSearchError('');      
      defineRenderDetails (isChecked);        
    } else {      
      setSearchError('Нужно ввести ключевое слово')
    }    
  }

  return (    
    <section className="Movies">              
      <SearchForm 
        search={search} 
        searchError={searchError}
        isChecked ={isChecked}
        onChange={handleSearchChange} 
        handleSubmit={handleSearchSubmit}
        handleCheckbox={handleCheckbox}/>      
      {(searchResult) 
      ? (<p className="Movies__search-result">{searchResult}</p>)
      : <MoviesCardList 
          type={'saved'} 
          movies={ movies } 
          savedMovies={props.savedMovies} 
          button={'MoviesCard__button_type_delete'} 
          handleCardLike={props.handleCardLike}
          handleCardUnlike={props.handleCardUnlike}
        />
      }      
      <Footer />       
    </section>
  );
}

export default SavedMovies;