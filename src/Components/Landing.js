import React, { Component } from 'react';
import Slide1 from '../Images/amber-mason-335282.jpg';
import Slide2 from '../Images/armando-castillejos-30939.jpg';
import Slide3 from '../Images/kaitlyn-baker-246347.jpg';
import Slide4 from '../Images/scott-webb-154508.jpg';
import Slide5 from '../Images/thomas-verbruggen-94814.jpg';

class Landing extends Component {
  render() {
    return (
      <div className='landingApp'>
        <div className='slider'>
            <img className='sliderImgOne' src={Slide1} />
            <img className='sliderImgTwo' src={Slide2} />
            <img className='sliderImgThree' src={Slide3} />
            <img className='sliderImgFour' src={Slide4} />
            <img className='sliderImgFive' src={Slide5} />
        </div>
      </div>
    );
  }
}

export default Landing;