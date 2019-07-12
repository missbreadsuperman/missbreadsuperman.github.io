import React from 'react';
import About from './About'
import Skills from './Skills'

function Home(){


  return (
    <div className="home">
      <div className="header">
        <p>I'm Bonnie Hsu.</p>
        <strong>A Front-End Developer.</strong>
      </div>
      <div className="switcher">
        <button>en</button>
        <button>台灣</button>
      </div>
      <div className="content">
        <div className="items">
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>EXPERIENCE</li>
          <li>NOTES</li>
          <li>CONTACT</li>
          <button className="go-resume">
            <strong>SEE MY RESUME</strong>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
        <div className="items-body">
          <Skills />
        </div>
        
      </div>
      
      


    </div>
  )
    
}
export default Home