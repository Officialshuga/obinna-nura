import React from 'react'
import "./Turkishpaintings.css"
import one from "./paint 4.jpg"
import two from "./paint 8.jpg"
import three from "./painting 10.jpg"
import four from "./painting 11.jpg"
import five from "./painting 12.jpg"
import six from "./painting 13.jpg"
import seven from "./painting 14.jpg"
import eight from "./painting 15.jpg"
import nine from "./painting 17.jpg"
import ten from "./painting 3.jpg"
import eleven from "./painting 5.jpg"
import twelve from "./painting 9.jpg"
import thirt from "./painting 7.jpg"




const Turkishpaintings = () => {
  return (
    <div className='hello'>
    <div className='paintin'>
      <img src={one} alt='knacker 104'/>
      <img src={thirt} alt='knacker 104'/>      
      <img src={eleven} alt='knacker 104'/>
    </div>
      <div className='paintin'>
        <img src={six} alt='knacker 104'/>
        <img src={three} alt='knacker 104'/>
        <img src={four} alt='knacker 104'/>
      </div>
      <div className='paintin'>
        <img src={nine} alt='knacker 104'/>
        <img src={seven} alt='knacker 104'/>
        <img src={twelve} alt='knacker 104'/>
      </div>
        <div className='paintin'>
        <img src={ten} alt='knacker 104'/>
        <img src={eight} alt='knacker 104'/>
        <img src={five} alt='knacker 104'/>
        </div>
          <div className='paintin'>
          <img src={two} alt='jwdb'/>
          </div>      
    </div>
  )
}

export default Turkishpaintings
