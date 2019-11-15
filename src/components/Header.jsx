import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Why Not Wine</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/wine">Wine List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/food">Food Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;