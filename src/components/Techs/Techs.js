import React from 'react';

function Techs(props) {
 
  return (    
    <section className="Techs">
      <h2 className="Main__subtitle">Технологии</h2>      
      <h3 className="Techs__description-title">7 технологий</h3>            
      <p className="Techs__description-paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="Techs__icons">
          <div className="Techs__icon"><p className="Techs__icon-text">HTML</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">CSS</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">JS</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">React</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">Git</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">Express.js</p></div>
          <div className="Techs__icon"><p className="Techs__icon-text">mongoDB</p></div>
      </div>
    </section>
  );
}

export default Techs;