import React from 'react';

function Page({ section, locale }){
  const renderAbout = (locale) => {
    if (locale === 'tw') {
      return (
        <div className="about">
          <p>嗨，我是婉瑄。</p>
          <p>今年剛從中央大學數學系畢業，喜歡數學、喜歡程式、更喜歡學習。</p>
          <p>在職場上，我希望能與公司和同事一起進步，不懂的東西就是我能學習的事情，不侷限於我在什麼位置。</p>
          <p>對自己來說，我想成為隨時有想法便能付諸於行動的工程師，是時候該做點能改變世界的事了！</p>
        </div>
      )
    }
    else return (
      <div className="about">
        <p>Hello, I'm Bonnie.</p>
        <p>I graduated from the Department of Mathematics in NCU and I love math, programming, and learning, the most.</p>
        <p>In the work plact, I hopes I can grow up together with the company and my colleagues. What I'm not familiar with is what I can learn.</p>
        <p>For myself, I want to be an engineer who can bring the ideas into practice as soon as there's something was needed. It's time to change the world!</p>
      </div>
    )
  }
  
  const renderSkills = () => {
    return (
      <div className="skills">
        <li>React/ Redux</li>
        <li>React Hook</li>
        <li>Unit Testing (Jest + Enzyme)</li>
        <li>Git</li>
        <li>Node.js + Express</li>
        <li>AWS Simple Email Service</li>
        <li>AJAX, Jquery</li>
      </div>
    )
  }

  const renderExperience = (locale) => {
    if (locale === 'tw') {
      return (
        <div className="experience">
          <li>2019/07 中央大學數學系畢業</li>
          <li>2019/04 ~ 2019/06 Dipp 前端實習生</li>
          <li>2019/01 ~ 2019/04 AImazing 後端工程師</li>
          <li>多益聽讀測驗 785 分</li>
        </div>
      )
    }
    else return (
      <div className="experience">
        <li>2019/07 Graduate from Mathematics in National Central University</li>
        <li>2019/04 ~ 2019/06 Dipp Front-End Intern</li>
        <li>2019/01 ~ 2019/04 AImazing Back-End Engineer</li>
        <li>Got 785 on Toeic Listening & Reading</li>
      </div>
    )
  }

  const renderContact = () => {
    return (
      <div className="contact">
        <table>
          <tbody>
            <tr>
              <th>Phone</th>
              <td>+886975073102</td>
            </tr>
            <tr>
              <th>Email</th>
              <td> 
                <a href="mailto:missbreadsuperman@gmail.com">missbreadsuperman@gmail.com</a>
              </td>
            </tr>
            <tr>
              <th>Github</th>
              <td>
                <a href="https://github.com/missbreadsuperman" target="_blank" rel="noopener noreferrer">
                  https://github.com/missbreadsuperman
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  if (section === 'About') {
    return renderAbout(locale)
  } else if (section === 'Skills') {
    return renderSkills()
  } else if (section === 'Experience') {
    return renderExperience(locale)
  } else if (section === 'Contact') {
    return renderContact()
  }

}
export default Page