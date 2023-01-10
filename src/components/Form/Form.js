import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';


function Form(props) {  

  return (
    <form 
      className={'Form'} 
      action="#" 
      method="post" 
      name={props.name} 
      onSubmit= {props.onSubmit}
      noValidate    
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
        value={props.email || ''} 
        onChange={props.handleChange} 
        required 
        minLength="2"
        pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"        
      />      
      <span className={`Input-error Input-error_place_email-${props.name}`}>{props.emailError}</span>
      
      <label htmlFor="password-input" className="Form__label">Пароль</label>   
      <input 
        id="password-input" 
        type="password" 
        className="Form__input" 
        name="password" 
        placeholder='Пароль'
        value={props.password || ''} 
        onChange={props.handleChange} 
        required        
      />      
      <span className={`Input-error Input-error_place_password-${props.name}`}>{props.passwordError}</span>
      <span className={`Input-error Input-error_place_submit`}>{props.submitError}</span>
      <button 
        type="submit" 
        className={(props.isValid & !props.isLoading) ? `Form__button` : `Form__button Form__button_disabled`} 
        disabled={!props.isValid || props.isLoading}>{props.isLoading ? `Загрузка...` : props.button}
      </button>
      <p className="Form__help-text">{props.helpText}<Link to={props.route} className="Form__reroute-link">{props.rerouteText}</Link></p>    
    </form>    
  );
}

export default Form;