import React from 'react'
import "./about.css"
import sidePic from "./dining 4.jpg"
import obi from "./obi.jpg"
import ehi from "./hanks.jpg"
import lee from "./lee1.jpg"




const About = () => {
  return (
    <>
       <div className='theWhole'>
        <h1>ABOUT US</h1>
        <div className='cont'>
          <img src={sidePic} alt='side emo'/>
         <div className='words'>
         <h1>About Us: Transforming Spaces, Creating Dreams</h1>
          <p>
            Welcome to Nura Luxury Limited, where your vision meets our expertise to create spaces that
            inspire and delight. Our journey began with a simple idea: to transform ordinary spaces into extraordinary
            environments that reflect your personality and style.
            </p>
            <h1>Our Story</h1>
            <p>Founded with a passion for design and a commitment to excellence, Nura Luxury Limited has grown into a premier
            interior decoration firm. We believe that every space has the potential to tell a story, and our mission is to
            help you tell yours in the most beautiful way possible.
            </p>
            <h1>Our Philosophy</h1>
            <p>
            At Nura Luxury Limited, we are guided by a simple yet powerful philosophy: design should be both
            beautiful and functional. We take pride in our ability to blend aesthetics with practicality, ensuring that
            every project we undertake not only looks stunning but also serves your needs perfectly.
            </p>
         </div>
          
       </div>
       <h1>OUR STAFFS</h1>
      <div className='marketPpl'>
          <div className='ppl'>
            <img src={obi} alt=''/>
            <h3>Obinna</h3>
          </div>

          <div className='ppl'>
            <img src={ehi} alt=''/>
            <h3>AmaHan</h3>
          </div>

          <div className='ppl'>
            <img src={lee} alt=''/>
            <h3>Leonard</h3>
          </div>
      </div>

        </div> 
    </>
  )
}

export default About
