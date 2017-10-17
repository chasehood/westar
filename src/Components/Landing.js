import React, { Component } from 'react';
import Slider from 'react-slick'; 
import image1 from '../Images/amber-mason-335282.jpg'
import image2 from '../Images/armando-castillejos-30939.jpg'
import image3 from '../Images/kaitlyn-baker-246347.jpg'
import image4 from '../Images/scott-webb-154508.jpg'
import image5 from '../Images/thomas-verbruggen-94814.jpg'

class Landing extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false    
    };
    return (
      <Slider {...settings} className='slider'>
            <div> <img width={'100%'}src={image1}/></div>
            <div> <img width={'100%'}src={image2}/></div>
            <div> <img width={'100%'}src={image3}/></div>
            <div> <img width={'100%'}src={image4}/></div>
            <div> <img width={'100%'}src={image5}/></div>
      </Slider>
    );
  }
}

export default Landing;

