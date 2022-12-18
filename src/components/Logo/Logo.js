import React from 'react';
import { Link } from 'react-router-dom';

function Logo (props) {
  return (
    <Link to="/" className="Header__link">
      <div className="Logo" />
    </Link>
  )
}
export default Logo;