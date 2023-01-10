import React from 'react';

function InfoTooltip(props) {

  return (    
    <div className={props.isOpen ? `InfoTooltip InfoTooltip_opened` : `InfoTooltip`}>
      <div className="InfoTooltip__form">
        <button type="button" className="InfoTooltip__close" onClick={props.onClose} />
        <div className="InfoTooltip__confirmation" />
        <h3 className={`InfoTooltip__title`}>Данные успешно изменены</h3>
      </div>      
    </div>
  );
}

export default InfoTooltip;