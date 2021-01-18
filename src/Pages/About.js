import React from 'react'
import '../Styles/About.css'
import GithubImg from '../Images/github.svg'
import LinkedInImg from '../Images/linkedin.svg'

export default function About() {
  const socialMedia = [
    {
      icon: GithubImg,
      link: 'https://github.com/Nahuelluca20',
      name: 'GitHub'
    },
    {
      icon: LinkedInImg,
      link: 'https://www.linkedin.com/in/nahuel-luca-b66356199/',
      name: 'LinkedIn'
    },
  ]

  return (
    <div className="about">
      <h1>About the project</h1>
      <p>
        This project is made with Reactjs and the 
        <a className 
        href="https://www.themoviedb.org/"> TMDB API (the movie database).</a>
        <br/> You can find the code in my Github
      </p>

      <div className="social">
        {
          socialMedia.map((items) => {
            return (
              <a href={items.link} className="icon" key={items.name}>
                <img src={items.icon} alt={items.name} width="50px"/>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}
