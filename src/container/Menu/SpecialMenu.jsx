import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from "../../components"
import { images, data } from "../../constants"

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title"> 
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
   
    <div className="app__specialMenu-menu">  
      <div className="app_specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">  
          {data.wines.map((wine, idx) => ( 
            <MenuItem key={wine.title + idx} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div> 
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu image" />
      </div>   

      <div className="app_specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem key={cocktail.title + idx} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
 
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className='custom__button'>
        View More
      </button>
    </div>

  </div>
);

export default SpecialMenu;
