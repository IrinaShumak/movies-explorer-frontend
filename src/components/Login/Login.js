import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form.js';
import {authorize} from '../../utils/AuthApi';

function Login (props) {
  const history = useNavigate();  
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function resetForm () {
      setValues({});
      setErrors({});
      setIsValid(false);
    }

  function handleSubmit(e){
    e.preventDefault()
    if (isValid){
      setIsLoading(true);    
      authorize(values.password, values.email)
      .then((data) => {          
          if (data.token){
            localStorage.setItem('jwt', data.token);            
          }              
          props.handleLogin(true);          
          history("/movies");          
          resetForm ();          
      })            
      .catch((err) => {
        console.log('Что-то пошло не так: ', err);        
        setErrors({...errors, submit: "Ошибка входа! Попробуйте ещё раз."});        
      })
      .finally(() => {
        setIsLoading(false);
      });
    }    
  }
  
  return (
  <Form 
    name={props.name}
    title = "Рады видеть!" 
    button = "Войти"
    route = "/signup"
    helpText = "Ещё не зарегистрированы? "
    rerouteText = "Регистрация"
    email = {values.email}
    emailError = {errors.email}
    password = {values.password}
    passwordError ={errors.password}
    submitError ={errors.submit}
    isValid = {isValid}
    isLoading = {isLoading}
    handleChange = {handleChange}      
    onSubmit ={handleSubmit}
  />
  )
}

export default Login;