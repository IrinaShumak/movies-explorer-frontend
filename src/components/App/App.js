import React from 'react';
import '../../index.css';
import Main from '../Main/Main';
/* import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import {api} from '../utils/Api';
import {getContent} from '../utils/auth';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteCardPopup from './DeleteCardPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from "./ProtectedRoute"
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {LoadingProgressContext} from '../contexts/LoadingProgressContext';*/
import {Route, Switch} from 'react-router-dom';


function App () {  
  
  return (
    <div className="page">
      <Switch>
          <Route path="/signin"></Route>
          <Route path="/signup"></Route>          
          <Route path="/movies"></Route>
          <Route path="/saved-movies"></Route>
          <Route path="/profile"></Route>
          <Route exact path="/">
            <Main />
          </Route>
      </Switch>      
                 
    </div>
        
  );
}

export default App;
