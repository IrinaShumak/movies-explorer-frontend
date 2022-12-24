import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form/Form.js';

function Register (props) {
  const [name, setName] = React.useState('');  
  const history = useHistory();
  
  function handleNameChange(e) {
    setName(e.target.value);    
  }
  
  return (
    <Form 
      name={props.name}
      title = "Добро пожаловать!" 
      button = "Зарегистрироваться"
      route = "/signin"
      helpText = "Уже зарегистрированы? "
      rerouteText = "Войти"  
      //onSubmit ={handleSubmit}
    >      
      <label htmlFor="name-input" className="Form__label">Имя</label>
      <input 
        id="name-input" 
        type="text" 
        className="Form__input" 
        name="name"
        placeholder='Имя' 
        value={name || ''}
        onChange={handleNameChange} 
        required 
        minLength="2"        
      />      
      <span className="Input-error Input-error_place_name Input-error_active">Что-то пошло не так...</span>          
    </Form>

  )
}

export default Register;