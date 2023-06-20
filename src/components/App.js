import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './AboutUs';
import './App.css';

import MyStory from './about-me/MyStory';
import Hobbies from './about-me/Hobbies';
import Contact from './about-me/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
