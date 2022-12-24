import React from 'react';
import Navigation from '../Navigation/Navigation.js';

function BurgerMenu (props) {

  return (  
    <div className={(props.isOpen) ? "BurgerMenu BurgerMenu_opened" : "BurgerMenu"}>
      <Navigation location={'outside'} isOpen={props.isOpen} onClose={props.onClose}/>
    </div>
  )
}

export default BurgerMenu; 