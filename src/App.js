import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Pages/Navbar/navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import DPaintings from "./Pages/3D Painting/DPainting";
import ExoticFurnitures from "./Pages/Exotic Furnitures/Exoticfurnitures";
import Furnitures from "./Pages/Furnitures/Furnitures.jsx";
import Projects from "./Pages/Projects/Projects";
import Turkishpaintings from "./Pages/Turkish Paintings/Turkishpaintings";
import Residential from "./Pages/Residential/Residential";
import Footer from './Pages/Footer/footer';
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';





function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/turkishpaintings" Component={Turkishpaintings}></Route>
        <Route path="/residential" Component={Residential}></Route>
        <Route path="/furnitures" Component={Furnitures}></Route>
        <Route path="/exoticfurnitures" Component={ExoticFurnitures}></Route>
        <Route path="/dpaintings" Component={DPaintings}></Route>
        <Route path="/projects" Component={Projects}></Route> 
      </Routes>
      <Footer />
    </BrowserRouter>



    {/* <>
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
        <div><h2>"-Hanks A.E"</h2></div>
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
        They created a warm and inviting atmosphere that perfectly complements the cuisine. The team's creativity
         and expertise truly shine through in every detail. Thank you for making my vision a reality!"</p>
         <div><h2> - Alex D.</h2></div></SwiperSlide>
        <SwiperSlide>
          <p>"NURA Interiors has a keen eye for design and a knack for understanding their clients' needs. They transformed my outdated kitchen into a modern and functional
           space that I love spending time in. I highly recommend them to anyone looking to upgrade their home!"</p>
           <div><h2> - Rachel S.</h2></div>
        </SwiperSlide>
        {/* {<SwiperSlide>Slide 6</SwiperSlide> 
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> 
      </Swiper>
    </> */}

  </>





    



    
  );
}

export default App;
