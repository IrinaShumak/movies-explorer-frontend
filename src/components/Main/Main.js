import React from 'react';
import NavTab from './NavTab/NavTab.js';
import Promo from './Promo/Promo.js'

function Main (props) {  
  
  return (
    <main className="content">
     <NavTab />
     <Promo />
    </main>
  );
}

export default Main;