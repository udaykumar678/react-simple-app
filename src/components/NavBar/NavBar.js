import React from 'react';
import {NavLink} from 'react-router-dom';
const navStyle = {
    marginBottom: '10px'
};

const navbar = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={navStyle}>
    <NavLink className="navbar-brand" to="/">Simple App</NavLink>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/shows" activeClassName="active">Shows</NavLink>
        </li>
      </ul>
     </div>
  </nav>
);


export default navbar;