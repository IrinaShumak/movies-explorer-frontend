import React from 'react';
import '../../index.css';
import Main from '../Main/Main';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Header from '../Header/Header.js';
import Error from '../Error/Error.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import Movies from '../Movies/Movies.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import {getContent} from '../../utils/AuthApi';
import {api} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {LoadingProgressContext} from '../../contexts/LoadingProgressContext.js';
import { Routes ,Route, useNavigate } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';

function App () { 
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);  
  const [profileError, setProfileError] = React.useState('');
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useNavigate();

  function handleUpdateUser ({name, email}) {
    setIsLoading(true);    
    api.updateProfileInfo({name, email})
      .then(({data}) => {              
        setCurrentUser(data);
        setProfileError('');
        handleShowConfirmation();  
      })
      .catch((err) => {
        console.log('Ошибка. Данные не обновлены: ', err);
        setProfileError('Ошибка. Данные не обновлены');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin (value) {
    setIsLoggedIn(value);
  }

  function handleBurgerMenuOpening (){
    setIsBurgerMenuOpen(true);
  }

  function handleBurgerMenuClosing (){
    setIsBurgerMenuOpen(false);
  }  

  const closeInfoTooltip = () => {    
    setIsConfirmationPopupOpen(false);    
  }

  function handleShowConfirmation () {
    setIsConfirmationPopupOpen(true);
  }

  function checkToken () {
    // если у пользователя есть токен в localStorage, 
    // эта функция проверит, действующий он или нет
    const jwt = localStorage.getItem('jwt');    
    if (jwt){            
      // проверяем токен
      getContent(jwt)
        .then((data) => {          
          handleLogin(true);
          history();                    
        })
        .catch((err) => {
          console.log('Пользователь не авторизован: ', err);        
        })           
    }
  }

  function handleCardLike(card) {    
    api.likePhoto(card)
      .then((data) => {      
        setSavedMovies([data.movie, ...savedMovies]);        
      })
      .catch((err) => {
        console.log('Ошибка. Лайк не сработал: ', err); 
      })      
    }

  function handleCardUnlike(idInBase, id) {      
    api.deleteCard(idInBase)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c.movieId !== id));        
      })
      .catch((err) => {
        console.log('Ошибка. Карточка не удалена: ', err); 
      });      
  }
  

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesList');
    localStorage.removeItem('search');
    localStorage.removeItem('checkbox');
    history('/');
    handleBurgerMenuClosing ();
    handleLogin(false);    
  }

  function defineUser(){
    api.takeUserInfo()
        .then(({data}) => {         
          setCurrentUser(data);                 
        })        
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        });
  } 

  React.useEffect(() => {
    if (isLoggedIn) {        
      api.getInitialCards()
        .then((data) => {
          setSavedMovies(data.movies);          
        })
        .catch((err) => {
          console.log('Ошибка. Карточки не могут быть загружены: ', err);
        }); 
    }     
  }, [isLoggedIn])

  React.useEffect(() => {
    if (isLoggedIn) {       
      defineUser();
    }    
  }, [isLoggedIn])

  React.useEffect(() => {
    checkToken();  
  }, [])
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoadingProgressContext.Provider value={isLoading}>
      <div className="page">
        <Routes>
            <Route path="/signin" element={
              <Login name="login" handleLogin={handleLogin} />
            }/>          
            <Route path="/signup" element={
              <Register name="register" handleLogin={handleLogin} />
            }/>          
            
            
            <Route element={<ProtectedRoute loggedIn={isLoggedIn}/>}>                              
            <Route path="/movies" element={
              <>
                <Header 
                  isOpen ={isBurgerMenuOpen} 
                  onOpen={handleBurgerMenuOpening} 
                  onClose={handleBurgerMenuClosing}
                />
                <Movies savedMovies={savedMovies} handleCardLike={handleCardLike} handleCardUnlike={handleCardUnlike}/>
              </>
            } /> 
           
            <Route path="/saved-movies" element={
              <>
                <Header          
                  isOpen ={isBurgerMenuOpen} 
                  onOpen={handleBurgerMenuOpening} 
                  onClose={handleBurgerMenuClosing}
                />
                <SavedMovies savedMovies={savedMovies} handleCardLike={handleCardLike} handleCardUnlike={handleCardUnlike}/>
               </>}
            />
            
            <Route path="/profile" element={
              <>           
                <Header          
                  isOpen ={isBurgerMenuOpen} 
                  onOpen={handleBurgerMenuOpening} 
                  onClose={handleBurgerMenuClosing}                  
                />
                <Profile signOut={signOut} onUpdateUser={handleUpdateUser} profileError={profileError}/>
                <InfoTooltip 
                  isOpen = {isConfirmationPopupOpen} 
                  onClose={closeInfoTooltip}    
                />
              </>}
            />             
            </Route>              
            <Route exact path="/" element={
              <Main 
                loggedIn={isLoggedIn} 
                isBurgerMenuOpen ={isBurgerMenuOpen} 
                handleBurgerMenuOpening={handleBurgerMenuOpening} 
                handleBurgerMenuClosing={handleBurgerMenuClosing}
              />
            }/> 
            <Route path="/*" element={<Error />}/>       
        </Routes>      
                 
      </div>
      </LoadingProgressContext.Provider>
    </CurrentUserContext.Provider>      
  );
}

export default App;
