import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import Slide1 from '../Images/amber-mason-335282.jpg';
import Slide2 from '../Images/armando-castillejos-30939.jpg';
import Slide3 from '../Images/kaitlyn-baker-246347.jpg';
import Slide4 from '../Images/scott-webb-154508.jpg';
import Slide5 from '../Images/thomas-verbruggen-94814.jpg';
const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5
];

const Slideshow = () => {
    return (
         <Fade
          images={images}
          duration="8000"
          transitionDuration="2500"
        />
    )
}

class Landing extends Component {
  render() {
    return (
      <div className="landingApp">
        <Slideshow  /> 
      </div>
    );
  }
}

export default Landing;