import React from 'react';
import '../../index.css';
import Main from '../Main/Main';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Header from '../Header/Header.js';
import Error from '../Error/Error.js';
import Preloader from '../Preloader/Preloader.js';
import Movies from '../Movies/Movies.js';
/* import Footer from './Footer';
import Menu from './Menu';
import {api} from '../utils/Api';
import {getContent} from '../utils/auth';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteCardPopup from './DeleteCardPopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from "./ProtectedRoute"
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {LoadingProgressContext} from '../contexts/LoadingProgressContext';*/
import {Route, Switch} from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';

function App () { 

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuOpening (){
    setIsBurgerMenuOpen(true);
  }

  function handleBurgerMenuClosing (){
    setIsBurgerMenuOpen(false);
  }
  
  return (
    <div className="page">
      <Switch>
          <Route path="/signin">
            <Login name="login" />
          </Route>
          <Route path="/signup">
            <Register name="register"/>
          </Route>
          <Route path="/error">
            <Error 
              error="404"
              message="Страница не найдена"
            />            
          </Route>         
          <Route path="/movies">              
            <Header          
              isOpen ={isBurgerMenuOpen} 
              onOpen={handleBurgerMenuOpening} 
              onClose={handleBurgerMenuClosing}
            />
            <Movies />
          </Route>
          <Route path="/saved-movies">            
            <Header          
              isOpen ={isBurgerMenuOpen} 
              onOpen={handleBurgerMenuOpening} 
              onClose={handleBurgerMenuClosing}
            />
            <SavedMovies />
          </Route>
          <Route path="/profile">            
            <Header          
              isOpen ={isBurgerMenuOpen} 
              onOpen={handleBurgerMenuOpening} 
              onClose={handleBurgerMenuClosing}
            />
            <Profile />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
      </Switch>      
                 
    </div>
        
  );
}

export default App;
