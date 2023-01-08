import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import {apiMovies} from '../../utils/MoviesApi.js';
import Preloader from '../Preloader/Preloader.js';

function Movies(props) {  
  const [items, setItems] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [searchError, setSearchError] = React.useState('');
  const [searchResult, setSearchResult] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);  
  const [counter, setCounter] = React.useState(0);  
  
  function checkResize() {
    setTimeout(defineRenderDetails(localStorage.getItem('search'), JSON.parse(localStorage.getItem('checkbox'))), 3000)
  }
  

  React.useEffect(() => {    
    if (JSON.parse(localStorage.getItem('moviesList'))) {      
      defineRenderDetails(localStorage.getItem('search'), JSON.parse(localStorage.getItem('checkbox')));
    } else {        
        setSearch('');
        setIsChecked(false);
        setInitialMovies([]);
      }        
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', checkResize);
      return () => {
        window.removeEventListener('resize', checkResize);    
      };
    }, []);
  

  function handleSearchChange(e) {
    setSearch(e.target.value);    
  }

  function handleCheckbox () {
    setIsChecked((active) => !active);
  }

  function defineRenderDetails (searchWord, shortFilms) {
    let size;
    if (window.innerWidth > 1000) {
      size = 12;
      setItems(15);
      setCounter(3);
    } else if (window.innerWidth > 650) {
      size = 8;
      setItems(10);
      setCounter(2);
    } else {
      size = 5;
      setItems(7);
      setCounter(2);
    }    
    let moviesList = JSON.parse(localStorage.getItem('moviesList')).filter(c => c.nameRU.includes(searchWord)&&((shortFilms&&c.duration<41)||(!shortFilms)));    
    const newFilm = moviesList.slice(0, size);
    setSearch(searchWord);
    setIsChecked(shortFilms);
    setInitialMovies(moviesList);
    setMovies(newFilm);
    if (moviesList.length === 0) {setSearchResult('Ничего не найдено')};    
  } 


  function handleSearchSubmit(e){
    e.preventDefault();    
    if (e.target.closest("form").checkValidity()){      
      setSearchError('');
      setSearchResult('');      
      setIsLoading(true);
      apiMovies.takeMoviesInfo()
        .then((data) => {          
          localStorage.setItem('moviesList', JSON.stringify(data));
          localStorage.setItem('search', search);
          localStorage.setItem('checkbox', JSON.stringify(isChecked));         
          defineRenderDetails(search, isChecked);          
        })
        .catch((err) => {
          console.log('Что-то пошло не так: ', err);
          setSearchResult('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {      
      setSearchError('Нужно ввести ключевое слово')
    }
    
  }
  
  function handleMoreClick (){
    setItems(items + counter); 
    setMovies(initialMovies.slice(0, items));       
  }

  return (    
    <section className="Movies">
      <SearchForm 
        search={search} 
        searchError={searchError}
        isChecked ={isChecked}
        onChange={handleSearchChange} 
        handleSubmit={handleSearchSubmit}
        handleCheckbox={handleCheckbox}
      />
      {(isLoading)&&(<Preloader />)};
      {((!searchResult)&&(!isLoading))&&( <>
      <MoviesCardList 
        movies={ movies } 
        savedMovies={props.savedMovies} 
        button={'MoviesCard__button_type_like'} 
        handleCardLike={props.handleCardLike}
        handleCardUnlike={props.handleCardUnlike}
      />
      <button 
        type="button" 
        className={(items > initialMovies.length+counter) ? `Movies__more-button Movies__more-button_hidden`: `Movies__more-button`} 
        onClick={handleMoreClick}>
        Ещё
      </button>
      </>
      )};
      {((searchResult)&&(!isLoading))&&(<p className="Movies__search-result">{searchResult}</p>)}
      <Footer />       
    </section>      
  );
}

export default Movies; 