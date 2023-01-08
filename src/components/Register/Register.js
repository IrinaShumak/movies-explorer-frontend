import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form.js';
import {register, authorize} from '../../utils/AuthApi.js';

function Register (props) {
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
    e.preventDefault();    
    if (isValid){
      setIsLoading(true);      
      register(values.password, values.email, values.name)
        .then((res) => {         
          authorize(values.password, values.email)
            .then((data) => {          
              if (data.token){
                localStorage.setItem('jwt', data.token);            
              }              
              props.handleLogin(true);          
              history("/movies");              
              resetForm ();              
            })           
        })            
        .catch((err) => {
          console.log('Что-то пошло не так: ', err);          
          setErrors({...errors, submit: "Что-то пошло не так! Попробуйте ещё раз."});
        })
        .finally(() => {
          setIsLoading(false);
        });        
    }
  }

  return (   
    <Form 
      name={props.name}
      title = "Добро пожаловать!" 
      button = "Зарегистрироваться"
      route = "/signin"
      helpText = "Уже зарегистрированы? "
      rerouteText = "Войти"
      email = {values.email}
      emailError = {errors.email}
      password = {values.password}
      passwordError ={errors.password}
      submitError ={errors.submit}
      isValid = {isValid}
      isLoading = {isLoading}
      handleChange = {handleChange}      
      onSubmit ={handleSubmit}
    >      
      <label htmlFor="name-input" className="Form__label">Имя</label>
      <input 
        id="name-input" 
        type="text" 
        className="Form__input" 
        name="name"
        placeholder='Имя' 
        value={values.name || ''}
        onChange={handleChange} 
        required 
        minLength="2"
        maxLength="30"
        pattern="^[а-яА-Яa-zA-ZЁё\s-]*$"       
      />      
      <span className="Input-error Input-error_place_name">{errors.name}</span>          
    </Form>    
  )
}

export default Register;