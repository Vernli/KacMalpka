import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [isDrop, setDrop] = useState(false);
  const showDropdown = () => {
    setDrop(!isDrop);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" id="Logo" />
          <h1 className="brand-name">KacMałpka</h1>
        </div>
        <div className="links-container">
          <NavLink to="/">Główna</NavLink>
          <div className="underline-block"></div>
          <NavLink to="/sklepy">Sklepy</NavLink>
          <div className="dropdown-box">
            <button className="dropdown-btn" onClick={showDropdown}>
              Produkty
            </button>
            {isDrop ? <Dropdown /> : ''}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
