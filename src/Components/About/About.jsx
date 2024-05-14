import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2>SCHOOL INTRO EXAMPLE</h2>
        <p>My school classrom sentence example 1</p>
        <p>My school classrom sentence example 2</p>
        <p>My school classrom sentence example 3</p>
        <p>My school classrom sentence example 4</p>
      </div>
    </div>
  )
}

export default About
