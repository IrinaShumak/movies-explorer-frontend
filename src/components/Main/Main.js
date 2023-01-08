import React from 'react';
import Header from '../Header/Header.js';
import NavTab from '../NavTab/NavTab.js';
import Promo from '../Promo/Promo.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main (props) {  
  
  return (
    <main className="content">
     {props.loggedIn 
       ? (<Header isOpen ={props.isBurgerMenuOpen} onOpen={props.handleBurgerMenuOpening} onClose={props.handleBurgerMenuClosing}/>)
       : (<NavTab />)
     }
     <Promo />
     <AboutProject />
     <Techs />
     <AboutMe />
     <Portfolio />
     <Footer />
    </main>
  );
}

export default Main;