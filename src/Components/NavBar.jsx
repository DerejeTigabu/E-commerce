import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ListItemSecondaryAction, SliderRail } from '@mui/material';
function NavBar() {
  return (
    <div className="container">
        <div className="wrapper">
         <div className="left">
            <div className="language">language</div>
            <div className="search-container">
                <input/>
          search
            </div> 
        </div>           
            <div className="center"> Modern e-commerce apps leverage AI-driven recommendations, AR-powered product previews, and one-click checkout to enhance user engagement and conversion rates. Popular frameworks like React Native (for cross-platform apps) or Vue.js (for web apps) power many e-commerce solutions, while backend technologies like Node.js, Firebase, or Shopify APIs handle inventory, payments, and analytics. With the rise of social commerce and voice shopping,</div>
           
            <div className="right">e-commerce apps continue to evolve, prioritizing speed, personalization, and omnichannel integration to meet consumer demands in 2024.</div>
        </div>
     
    </div>
  )
}

export default NavBar
 