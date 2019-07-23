import React , { useState } from 'react';
import Page from './Page'

function Home(){
  const [section, handleSection] = useState('About');
  const [language, handleLanguage] = useState('tw');

  return (
    <div className="home">
      <div className="header">
        <p>I'm Bonnie Hsu.</p>
        <strong>A Front-End Developer.</strong>
      </div>
      <div className="switcher">
        <div className="btn" onClick={() => handleLanguage('en')}><p className={language==='en' ? 'choose' : ''}>ＥＮ</p></div>
        <div className="btn" onClick={() => handleLanguage('tw')}><p className={language==='tw' ? 'choose' : ''}>台灣</p></div>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="items">
            <li onClick={()=> handleSection('About')}>ABOUT</li>
            <li onClick={()=> handleSection('Skills')}>SKILLS</li>
            <li onClick={()=> handleSection('Experience')}>EXPERIENCE</li>
            <li onClick={()=> handleSection('Contact')}>CONTACT</li>
          </div>
          <a href='Resume-Bonnie_Hsu.pdf' target='_blank' style={{ textDecoration: 'none'}}>
            <button className="go-resume">
              <strong>SEE MY RESUME</strong>
              <i className="fas fa-arrow-right" />
            </button>
          </a>
        </div>
        <div className="content-right">
          <Page section={section} locale={language}/> 
        </div>
        
      </div>
      
      


    </div>
  )
    
}
export default Home