import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form/Form.js';

function Login (props) {
  const history = useHistory();

  /*function handleSubmit(e){
    e.preventDefault()
    if (email && password){    
      authorize(password, email)
      .then((data) => {          
          if (data.token){
            localStorage.setItem('jwt', data.token);            
          }              
          props.handleLogin(true);          
          history.push("/");
          props.handleUserEmail(email);
          setEmail('');
          setPassword('')          
      })            
      .catch((err) => {
        console.log('Что-то пошло не так: ', err);
        props.handleShowConfirmation("Ошибка входа!Попробуйте ещё раз.", failure);
      })
    }    
  }*/
  
  return (
  <Form 
    name={props.name}
    title = "Рады видеть!" 
    button = "Войти"
    route = "/signup"
    helpText = "Ещё не зарегистрированы? "
    rerouteText = "Регистрация"  
    //onSubmit ={handleSubmit}
  />
  )
}

export default Login;