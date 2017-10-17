import React, { Component } from 'react';
import Logo from '../Images/w-logo-white.png';


class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='border'>
          <div className='card-container'>
            <div className='logo'>
              <img src={Logo} />
            </div>
            <div className='name'>Westar Environmental</div>
            <div className='description'>Laskin and Associates, Inc. is an award-winning creative and innovative Landscape Architecture design firm based in Phoenix, Arizona. With over 40 years of experience and licenses in five states, we collaborate on a wide range of projects. Past projects include Corporate, Commercial, Industrial, Retail, Multi-Family, Hospitality, and Exclusive Residential. Our EXPERIENCE and our PASSION allows us to provide clients, contractors and municipalities with unparalleled professional design.</div>
            <div className='tabs'>
              <button>Our Work</button>
              <button>Our Team</button>
              <button>Let's Work Together</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;




        // <input  type="text" onChange={(e) => {this.handleInput(e)}} />
