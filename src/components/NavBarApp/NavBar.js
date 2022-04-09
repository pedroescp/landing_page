import React, { useState, useEffect } from 'react';
import { Button } from '../buttons/login/Button'
import { Link } from 'react-router-dom';
import   './NavBar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/homepage' className='navbar-logo' >
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon'>
            <i className='fas fa-times'/>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/homepage' className='nav-links' >
                Tabelas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                
              >
                Login
              </Link>
            </li>
          </ul>
          <Button buttonStyle='btn--outline'>Login</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;