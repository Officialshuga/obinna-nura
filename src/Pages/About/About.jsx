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
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
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
