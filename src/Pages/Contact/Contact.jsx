import React from 'react'
import "./Contact.css"
import { MdLocationOn } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";




const Contact = () => {
  return (
    <div className='everything'>
      <div className='para'>
        <p>We believe that every great design begins with a conversation. Contact us to start the discussion around your residential, commercial, hospitality, and institutional projects.</p>
      </div>

      <div className='images'>
        <div className='icon'><MdLocationOn /></div>
      
        <h4>ADDRESS</h4>
        <address>No 4, Abideen oyebola, HRC ESTATE, Harris Drive, off Lekki Expressway, VGC, Lekki, Lagos</address>
      </div>


      <div className='contact'>
        <h5><span><TfiHeadphoneAlt /></span>+234(0) 1 453 0108</h5>
        <h5><span><MdOutlineEmail /></span>E-mail: info@nura.com</h5>
      </div>
    </div>
  )
}

export default Contact
