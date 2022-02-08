import React from 'react';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from "../../constants"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className="app__footer section__padding" id="contact"> 
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-link-gericht">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</p>
        <img src={images.spoon} alt="spoon" className='spoon' />
        <div className="app__footer-link_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div> 

      <div className="app__footer-links_working-hours">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 Am - 12:00 Am</p>
        <p className="p__opensans" style={{ marginTop: "1rem" }}>Saturday - Sunday</p>
        <p className="p__opensans">07:00 Am - 11:00 Am</p>
      </div>
    </div>

    <div className="app__footer-copyrights">
      <p className="p__opensans">2021 Gerícht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
