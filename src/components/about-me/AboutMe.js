import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to="my-story">My Story</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AboutMe