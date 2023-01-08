import React from 'react';

function FilterCheckbox(props) {  

  
  return (
    <label className="FilterCheckbox">
	    <input type="checkbox" onChange={props.onChange} checked={props.isChecked}/>
	    <span className="FilterCheckbox__checkbox-switch"></span>
      Короткометражки
    </label>  
  );
}

export default FilterCheckbox;