import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Searchbar from '../Searchbar';
import ShoppingCart from '../ShoppingCart';
import Login from '../Login';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDrop, setDrop] = useState(false);

  const showDropdown = () => {
    setDrop(!isDrop);
  };
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      console.log(false);
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={`${scroll ? 'nav-scroll' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" id="Logo" />
        </div>
        <div className="links-container">
          <NavLink to="/">O nas</NavLink>
          <div className="underline-block"></div>
          <NavLink to="/sklepy">Sklepy</NavLink>
          <div className="dropdown-box">
            <button className="dropdown-btn" onClick={showDropdown}>
              Produkty
            </button>
            {isDrop ? <Dropdown /> : ''}
          </div>
        </div>
        <div className="button-section">
          <Searchbar />
          <ShoppingCart />
          <Login />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
