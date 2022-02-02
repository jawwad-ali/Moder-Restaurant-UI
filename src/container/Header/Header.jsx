import React from 'react';

import './Header.css';
import { images } from "../../constants"
import { SubHeading } from '../../components';

const Header = () => ( 
  <div className="app__header app__wrapper section__padding" id="home">
 
    <div className="app__wrapper_info"> 
      <SubHeading title="Chase the new Flavor" />
      <h1 className="app__header-h1">Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tortor diam. Interdum et malesuada fames
      </p>
      <button className="custom__button">Explore More</button>
    </div>

    <div className="app__wrapper_img" style={{backgroundColor:"red"}}>
      <img src={images.welcome} alt="Welcome image" />
    </div>

  </div>
);

export default Header; 
