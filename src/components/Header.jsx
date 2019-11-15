import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  var headerStyle = {
    backgroundColor: '#360607'
  };
  var textColor = {
    color: '#d1d1d1'
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={headerStyle}>
        <Link style={textColor} className="navbar-brand" to="/">Why Not Wine</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link style={textColor} className="nav-link" to="/wine">Wine List</Link>
            </li>
            <li className="nav-item">
              <Link style={textColor} className="nav-link" to="/food">Food Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;