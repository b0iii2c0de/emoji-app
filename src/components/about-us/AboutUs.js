import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-history">Our History</Link>
        </li>
        <li>
        <Link to="site-mission">Our Mission</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AboutUs