import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import one from "./painting 14.jpg"
import two from "./painting 15.jpg"
import three from "./painting 17.jpg"
import four from "./san 10.jpg"
import five from "./san 11.jpg"
import six from "./san 9.jpg"
import seven from "./3d 1.jpg"
import eight from "./3d 2.jpg"
import nine from "./3d 3.jpg"




const Home = () => {
 
  return (
    <>
       <div className='Slide'>
        <div className='contents'>
            <h5>Experience the world's beauty at your door step</h5>
            <h2>Touch of International flair at your decore!!!</h2>
            <button><Link to={"./Projects"}>our portfolio</Link></button>
         </div>
      </div>
       <div className='sec-part'>
        <div className='secSec'>
          <h5>WE CREATE SPACES THAT ARE BEAUTIFUL YET FUNCTIONAL…
              MEETING THE UNIQUE NEEDS OF IT'S USERS
          </h5>
        </div>
       <div className='opor'>
            <p>We're a design company that specializes in interior, graphics and art consultation for the hospitality, retail, commercial and residential industries; including but not limited to, luxury apartments,
             corporate offices, retail spaces, private homes, hotels, restaurants, salons, spas and design studios.
            </p>
             <Link to={"./about"}><button>What we do</button></Link>
          </div>
      </div>  
        <div className='head'><h1>Paintings</h1></div> 
      <div className='paintings'>
          <img src={one} alt='jhd'/>
          <img src={two} alt='jhd'/>
          <img src={three} alt='jhd'/>
      </div> 

       <div className='head'><h1>Residential</h1></div>
      <div className='paintings'>
          <img  src={four} alt='jhd'/>
          <img  src={five} alt='jhd'/>
          <img  src={six} alt='jhd'/>
      </div> 

      <div className='head'><h1>3D Paintings</h1></div>
      <div className='paintings amahan'>
          <img id='paint' src={seven} alt='jhd'/>
          <img id='paint' src={eight} alt='jhd'/>
          <img id='paint' src={nine} alt='jhd'/> 
      </div>

      <div className='proj'>
        <Link to="./Projects"><button>VIEW MORE PROJECTS</button></Link>
      </div>
      <div className='head'><h1>CUSTOMER SAYS </h1></div>
       
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>"I am absolutely thrilled with the transformation of my home by NURA Interiors! Their team listened to my ideas and preferences, and the end 
          result far exceeded my expectations. I highly recommend them to anyone looking to elevate their space."</p>
          <div><h2>-Hanks A.E</h2></div>
          </SwiperSlide>
          <SwiperSlide><p>"Working with NURA Interiors was a fantastic experience from start to finish. Their attention to detail, creativity, and professionalism were outstanding. They transformed my office
          into a stylish and functional space that has received countless compliments. Thank you, NURA Interiors!"</p>
          <div><h2> - John M</h2></div>
          </SwiperSlide>
          <SwiperSlide>
          <p>"NURA Interiors completely transformed our living room into a cozy and elegant space that reflects our style perfectly. Their team was a pleasure to work with,
          and they were able to capture our vision and bring it to life. We couldn't be happier with the results!"</p>
          <div><h2> - Emily T.</h2></div>
          </SwiperSlide>
          <SwiperSlide>
          <p>"I recently hired NURA Interiors to design my new restaurant, and I am so impressed with the outcome.
          They created a warm and inviting atmosphere that perfectly complements the cuisine. Thank you for making my vision a reality!"</p>
          <div><h2> - Alex D.</h2></div></SwiperSlide>
          <SwiperSlide>
            <p>"NURA Interiors has a keen eye for design and a knack for understanding their clients' needs. They transformed my outdated kitchen into a modern and functional
            space that I love spending time in. I highly recommend them to anyone looking to upgrade their home!"</p>
            <div><h2> - Rachel S.</h2></div>
            </SwiperSlide>
        </Swiper>      


    </>
      
    
    
  )
}

export default Home
