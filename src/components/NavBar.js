import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Home</NavLink>
      <NavLink to="/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Reviews</NavLink>
      <NavLink to="/about-me" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>About Me</NavLink>
      <NavLink to="/about-us" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>About Us</NavLink>
    </nav>
  )
}

export default NavBar