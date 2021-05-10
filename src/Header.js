import React from 'react';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import './Header.css';

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          Jean-Herve Roux
        </NavLink>
      </div>

      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/" activeClassName="activeClass" exact>
            <HomeIcon />                  
          </NavLink>

          <NavLink to="/contact" activeClassName="activeClass">            
            <EmailIcon />                
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;