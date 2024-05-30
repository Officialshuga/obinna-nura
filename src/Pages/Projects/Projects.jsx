import React from 'react'
import "./Projects.css"
import three from "./3d 1.jpg"
import threeDT from "./3d 2.jpg"
import threeDTh from "./3d 3.jpg"
import one from "./exo 1.jpg"
import two from "./exo 2.jpg"
import thre from "./exo 3.jpg"
import ones from "./san 1.jpg"
import twos from "./san 2.jpg"
import threes from "./san 3.jpg"
import ha from "./sofa 5.jpg"
import tuwos from "./sofa 4.jpeg"
import thes from "./sofa 3.jpg"




const Projects = () => {
  return (
    <div className='hello'>
      <div>
        <h1 className='puss'>Paintings</h1>
        <img src={three} alt='this is an waka'/>
        <img src={threeDT} alt='this is an waka'/>
        <img src={threeDTh} alt='this is an waka'/>
      </div>


      <div>
        <h1 className='puss'>Exotic Furnitures</h1>
        <img src={one} alt='knacker 104'/>
        <img src={two} alt='this is an waka'/>
        <img src={thre} alt='this is an waka'/>
      </div>

      <div>
        <h1 className='puss'>Residential</h1>
        <img src={ones} alt='knacker 104'/>
        <img src={twos} alt='this is an waka'/>
        <img src={threes} alt='this is an waka'/>
      </div>

      <div>
        <h1 className='puss'>Furniture</h1>
        <img src={ha} alt='knacker 104'/>
        <img src={tuwos} alt='this is an waka'/>
        <img src={thes} alt='this is an waka'/>
      </div>
    </div>
  )
}

export default Projects
