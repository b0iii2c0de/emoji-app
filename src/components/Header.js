import React from 'react'
// import logo from '../logo.svg';
import NavBar from './NavBar';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <p className="logo">
          <span role="img.png" aria-label="Emoji critic logo">🤔</span>
          Emoji Critic
        </p>
        <NavBar />
      </div>
    </div>
  )
}

export default Header