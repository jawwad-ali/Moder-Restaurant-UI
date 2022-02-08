import React from 'react';

import './Newsletter.css';
import { SubHeading } from '../../components';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And Never miss latest updates!</p>
    </div> 
    <div className='app__newsletter-input flex__center'>
      <input placeholder='Enter your e-mail Address' /> 
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;  
