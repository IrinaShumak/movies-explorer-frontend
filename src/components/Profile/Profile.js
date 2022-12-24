import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {

  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  
  function handleNameChange(e) {
    setName(e.target.value);    
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);    
  }

  return (
    <form 
      className="Profile"
      action="#" 
      method="post" 
      name="profile"
      //onSubmit= {props.handleSubmit}        
    >      
      <h3 className="Profile__title">Привет, {name}</h3>
      <div className="Profile__input-container">
        <label htmlFor="name-input" className="Profile__label">Имя</label>
        <input 
          id="name-input" 
          type="text" 
          className="Profile__input" 
          name="name"
          value={name || ''} 
          onChange={handleNameChange} 
          required 
          minLength="2"        
        />
        <span className="Input-error Input-error_place_profile Input-error_active">Что-то пошло не так...</span>
      </div>
      <div className="Profile__input-container">
        <label htmlFor="email-input" className="Profile__label">E-mail</label>
        <input 
          id="email-input" 
          type="text" 
          className="Profile__input" 
          name="email"          
          value={email || ''} 
          onChange={handleEmailChange} 
          required 
          minLength="2"        
        />      
        <span className="Input-error Input-error_place_profile Input-error_active">Что-то пошло не так...</span>
      </div>
      
      <button type="submit" className="Profile__button">Редактировать</button>
      <button type="button" className="Profile__button Profile__buttton_type_exit"><Link to="/signin" className="Profile__reroute-link">Выйти из аккаунта</Link></button>
    </form>    
  );
}

export default Profile;