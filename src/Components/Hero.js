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
            <h3 className='name'>Westar Environmental, LLC.</h3>
            <div className='description'>
A successful commercial landscaping project, is highly dependent upon timely completion of the job and long-lasting beautification. Our family of experts has the knowledge and skill to meet these deadlines. We are highly trained professionals in landscape and irrigation system installation.  More importantly, we are skilled in customer care.<br /><br />Every employee at Westar Environmental, understands that reliability, honesty and professionalism are paramount when selecting a landscape contractor.  Westar hauls all their own granite and hardscape materials, we shop the finest nurseries in the valley to find the best prices to extend to our elite clientel.<br /><br />The people that work for us are family, the General Contractors we work for are friends.
            </div>
            <div className='tabs'>
              <a>
                <span className="text">Our Work</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </a>
              <a>
                <span className="text">Our Team</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </a>
              <a>
                <span className="text">Let's Work Together</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;




        // <input  type="text" onChange={(e) => {this.handleInput(e)}} />
