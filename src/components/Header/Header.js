import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';

function Header (props) {

  
  return (
    <>
      {(props.isOpen) && (<BurgerMenu isOpen ={props.isOpen} onClose={props.onClose}/>)}
      <header className="Header">
        <Logo />
        <Navigation location="inside" isOpen ={props.isOpen} onClose={props.onClose}/>
        {(!props.isOpen) &&
          (<button type="button" className="Header__burger-menu-btn Header__burger-menu-btn_type_open" onClick={props.onOpen}/>)
        }
      </header>
    </>
  )
}

export default Header;