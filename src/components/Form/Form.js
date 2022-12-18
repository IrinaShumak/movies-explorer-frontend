import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Form(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleEmailChange(e) {
    setEmail(e.target.value);    
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);    
  }

  return (
    <form 
      className={'Form'} 
      action="#" 
      method="post" 
      name={props.name} 
      //onSubmit= {props.handleSubmit}        
    >
      <Logo />
      <h3 className={'Form__title'}>{props.title}</h3>
      {props.children}
      <label htmlFor="email-input" className="Form__label">E-mail</label>
      <input 
        id="email-input" 
        type="text" 
        className="Form__input" 
        name="email"
        placeholder='Email' 
        value={email || ''} 
        onChange={handleEmailChange} 
        required 
        minLength="2"        
      />
      {props.name === "register" &&
        <span className="Input-error Input-error_place_email Input-error_active">Что-то пошло не так...</span>
      }
      <label htmlFor="password-input" className="Form__label">Пароль</label>   
      <input 
        id="password-input" 
        type="password" 
        className="Form__input" 
        name="password" 
        placeholder='Пароль'
        value={password || ''} 
        onChange={handlePasswordChange} 
        required        
      />
      {props.name === "register" &&
        <span className="Input-error Input-error_place_password Input-error_active">Что-то пошло не так...</span>
      }
      <button type="submit" className={'Form__button'}>{props.button}</button>
      <p className="Form__help-text">{props.helpText}<Link to={props.route} className="Form__reroute-link">{props.rerouteText}</Link></p>    
    </form>    
  );
}

export default Form;