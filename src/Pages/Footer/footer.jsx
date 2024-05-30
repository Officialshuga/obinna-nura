import React from 'react'
import "./footer.css"
import logo from "../Navbar/logo.jpg"
const Footer = () => {
  // const func=()=>{
  //   if (mobwid ) {
      
  //   }
  // }


  return (
    <>
        <div className='footer'>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <p>Experience the world's beauty at your doorstep! Our interior design company continues to offer a curated selection of imported paintings, bringing global
            artistry and elegance into your home. Explore our collection and add a touch of international flair to your decor!</p> 
          </div>
          <div className='footer-sec'>
            <h2>Contact Us</h2>
            <p>Holden Park Street, Harris Drive , Lagos, Nigeria</p>
            <p><span>Phone:</span> 0706 941 1946</p>
            <p> <span>Website:</span><a href='nuraluxurylimited.com'> nuraluxurylimited.com</a> </p>
            <p> <span>E-mail:</span><a href='nuraluxurylimited@gmail.com'> nuraluxurylimited@gmail.com</a> </p>
          </div>
        </div> 

      
    </>
  )
}

export default Footer
