import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error(props) {
  const history = useNavigate();  

  return (    
    <section className="Error">              
      <p className="Error__code">404</p>
      <p className="Error__message">Страница не найдена</p>
      <button type="button" className="Error__return-button" onClick={() => history(-3)}>Назад</button>
    </section>
  );
}

export default Error;