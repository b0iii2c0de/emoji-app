import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Emoji Critic — всё об эмодзи</h2>
      <p>
        #1 среди авторов обзоров на эмодзи в этом году!
      </p>
      <Link to="/reviews">
        Tap to see latest reviews!  
      </Link>
    </div>
  )
}

export default Dashboard