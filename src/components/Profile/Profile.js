import React from 'react';
import {LoadingProgressContext} from '../../contexts/LoadingProgressContext.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLoading = React.useContext(LoadingProgressContext);
  
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {    
    setValues({name: currentUser?.name, email: currentUser?.email })
  }, [currentUser]); 
  

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function handleSubmit (e) {
    e.preventDefault();    
    props.onUpdateUser(values);
  }

  return (
    <form 
      className="Profile"
      action="#" 
      method="post" 
      name="profile"
      onSubmit= {handleSubmit}    
    >      
      <h3 className="Profile__title">Привет, {values.name}</h3>
      <div className="Profile__input-container">
        <label htmlFor="name-input" className="Profile__label">Имя</label>
        <input 
          id="name-input" 
          type="text" 
          className="Profile__input" 
          name="name"
          value={values.name || ''} 
          onChange={handleChange} 
          required 
          minLength="2"
          maxLength="30"
          pattern="^[а-яА-Яa-zA-ZЁё\s-]*$"        
        />
        <span className="Input-error Input-error_place_profile">{errors.name}</span>
      </div>
      <div className="Profile__input-container">
        <label htmlFor="email-input" className="Profile__label">E-mail</label>
        <input 
          id="email-input" 
          type="text" 
          className="Profile__input" 
          name="email"          
          value={values.email || ''} 
          onChange={handleChange} 
          required 
          minLength="2"
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"       
        />      
        <span className="Input-error Input-error_place_profile">{errors.email}</span>
      </div>
      <span className={`Input-error Input-error_place_submit`}>{props.profileError}</span>
      <button 
        type="submit" className={
          (isValid & !isLoading & ((values.name !== currentUser?.name) || (values.email !== currentUser?.email)) ) 
          ? `Profile__button` 
          : `Profile__button Profile__button_disabled`
        }
        disabled={!isValid || isLoading}
      >
        {isLoading ? 'Редактирование...' : 'Редактировать'}
      </button>
      <button type="button" className="Profile__button Profile__buttton_type_exit" onClick={props.signOut}>
        Выйти из аккаунта
      </button>
    </form>    
  );
}

export default Profile;