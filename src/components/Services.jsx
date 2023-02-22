
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';

const Services = () => {
  return (
    <div>
        <Carousel 
        infiniteLoop
        autoPlay
        showStatus={false}      //1 of 2 slides
        showThumbs={false}      //small picture at bottom
        showIndicators={false}  //small dots at bottom of image
        showArrows={false}      //control of carousel arrows.
        interval={2000} >
            <div>
                <img src={img1} alt="img1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="img1" />
                <p className='legend'>Peer to peer support </p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
