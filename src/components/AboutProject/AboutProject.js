import React from 'react';

function AboutProject(props) {
 
  return (    
    <section className="AboutProject">
      <h2 className="Main__subtitle">О проекте</h2>      
      <div className="AboutProject__description">
            <h3 className="AboutProject__description-title">Дипломный проект включал 5 этапов</h3>            
            <p className="AboutProject__description-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <h3 className="AboutProject__description-title">На выполнение диплома ушло 5 недель</h3>            
            <p className="AboutProject__description-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>            
      </div>
      <div className="AboutProject__timeline">
        <div className="AboutProject__timeline-bar">
          <p className="AboutProject__timeline-text">1 неделя</p>
        </div>
        <div className="AboutProject__timeline-bar AboutProject__timeline-bar_grey">
          <p className="AboutProject__timeline-text">4 недели</p>
        </div>
        <p className="AboutProject__timeline-text AboutProject__timeline-text_outside">Back-end</p>
        <p className="AboutProject__timeline-text AboutProject__timeline-text_outside">Front-end</p>
      </div>  
    </section>
  );
}

export default AboutProject;