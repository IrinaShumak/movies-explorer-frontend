import React from 'react';
import { useHistory } from 'react-router-dom';

function Error(props) {
  const history = useHistory();  

  return (    
    <section className="Error">              
      <p className="Error__code">{props.error}</p>
      <p className="Error__message">{props.message}</p>
      <button type="button" className="Error__return-button" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default Error;