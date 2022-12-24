import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/aboutMe-photo.png';

function AboutMe(props) {
 
  return (    
    <section className="AboutMe">      
      <h2 className="Main__subtitle">Студент</h2>
      <div className="Main__subtitle-line" />
      <div className="AboutMe__info">
        <div className="AboutMe__description">    
          <h3 className="AboutMe__name">Виталий</h3>
          <h4 className="AboutMe__main-info">Фронтенд-разработчик, 30 лет</h4>           
          <p className="AboutMe__background">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="AboutMe__link" to="https://github.com/IrinaShumak?tab=repositories" target="_blank">Github</Link>
      </div>
      <div className="AboutMe__photo" style = {{backgroundImage: `url(${image})`}} />
      </div>
    </section>
  );
}

export default AboutMe;