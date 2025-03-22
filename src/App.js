import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';  // Removed BrowserRouter
import LoginComponent from './LoginComponent';
import ResultsComponent from './ResultsComponent';
import './App.css';
import hilda from '../assests/hilda.jpeg';

function App() {
  return (
    <div className="App">
      {/* Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>Switch to Dark Mode</button>

      <header>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>Arapta Hilda Lucky</h1>
        <p style={{ margin: '5px 0', fontSize: '1.2em' }}>Bachelor of Science in Computer Science</p>
      </header>

      <main style={{ padding: '20px' }}>
        <section id="about">
          <h2 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>About Me</h2>
          <p style={{ lineHeight: '1.6' }}>
          Hi, I'm Arapta Hilda Lucky, a computer science student with a love for email marketing, investing and creativity. I enjoy creativity and exploring marketing strategies.
          When I'm not coding or anything serious in particular, you will find me travelling, reading a book or sleeping!
          </p>
        </section>

        <section id="details">
          <h3 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>Key Personal Details</h3>
          <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
            <li><strong>NAME:</strong> Arapta Hilda Lucky</li>
            <li><strong>ACCESS NO:</strong> B24242</li>
            <li><strong>COURSE:</strong> BACHELOR OF SCIENCE IN COMPUTER SCIENCE 2025</li>
            <li><strong>HOBBIES:</strong>  Graphic Design, Investing, Acting</li>
          </ul>
        </section>

        <section id="profile-picture" style={{ textAlign: 'center', margin: '20px 0' }}>
          <h3 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px', marginBottom: '15px' }}>Profile Picture</h3>
          <div className="profile-picture">
            <img src={arapta} alt="Profile Picture" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </section>

        <MyHobbiesComponent />

        <ResultsComponent />

        <section id="links">
          <h2 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>Links and Navigation</h2>
          <p><strong>Favourite Website:</strong> <a href="https://mailchimp.com/" target="_blank" rel="noopener noreferrer">MailChimp</a></p>
          <p><strong>Favourite Website:</strong> <a href="https://de.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
        </section>

        <section id="contact">
          <h2 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>Contact Information</h2>
          <p><strong>Email:</strong> <a href="mailto:araptahildalucky@gmail.com">araptahildalucky@gmail.com</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Araptalucky" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
        </section>

        <section id="goals">
          <h2 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>My Career Goals</h2>
          <p style={{ lineHeight: '1.6' }}>
          I plan to leverage digital marketing strategies to promote tech products, brands, or my own projects. 
          Invest and run a company. I also have a knack for total freedom--- I would kill for it--- Hahaha! Kidding! 
          But seriously, I mean it.
          </p>
          <p style={{ lineHeight: '1.6' }}>
          However, I hope to advance to leadership roles, where I can guide the development of impactful projects, mentor aspiring investors, and push innovation that benefits society.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Arapta Hilda Lucky. All rights reserved.</p>
      </footer>
    </div>
  )
}

// Function to toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const toggleButton = document.querySelector('.theme-toggle');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
  } else {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
  }
}


function MyHobbiesComponent(){
  return (
    <>
    <section id="hobbies">
          <h3 style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '5px' }}>Videos Showing My Hobbies</h3>
          <iframe
            width="100%"
            height="400"
            src="https://de.pinterest.com/pin/452471093833557437/"
            title="Graphic Design"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: '10px' }}
          ></iframe>
        </section>
    </>
  );
}

export default App; 