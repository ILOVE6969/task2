import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../RESOURCES/PB 1.png';
import PersonIcon from "../../RESOURCES/PersonIcon.svg";
import BagIcon from "../../RESOURCES/BAG.svg";
import MenuIcon from "../../RESOURCES/Menu Icon.svg";
import SearchIcon from "../../RESOURCES/🦆 icon _search_.png";

const Navbar = () => {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);
  const [isPersonMenuOpen, setPersonMenuOpen] = useState(false);

  const toggleShopMenu = () => {
    setShopMenuOpen(!isShopMenuOpen);
  };

  const togglePersonMenu = () => {
    setPersonMenuOpen(!isPersonMenuOpen);
  };

  return (
    <>
      <div className="Navbar">
        <div className="LeftHuMe">
          <img className="LOGO1" src={logo} alt="nothing" />
          <div className="searchbar">
            <img className='SearchIcon' src={SearchIcon} alt="Search" />
            <input type="text" id="search" className="invisible-search" placeholder="Search prishé beauty products" />
          </div>
        </div>
        <div className="RightHuMe">
          <div className="SHOP" onMouseEnter={toggleShopMenu} onMouseLeave={toggleShopMenu}>
            SHOP
            
            {isShopMenuOpen && (
              <div className="ShopMenu">
                <h3>Shop Now!</h3>
                <hr />
                <p>EYE</p>
                <p>LIPS</p>
                <p>FACE</p>
              </div>
            )}
          </div>
        
          <div className="PersonIcon" onMouseEnter={togglePersonMenu} onMouseLeave={togglePersonMenu}>
            <img src={PersonIcon} alt="Person" />
            {isPersonMenuOpen && (
              <div className="PersonMenu">
                <h4>Hello There!</h4>
                <hr />
                <p>Order&Return</p>
                <p>Wishlist</p>
                <hr />
                <p>Saved Card</p>   
                <p>Saved Adressess</p>   
                <hr />
                <p>Edit Profile</p>
                <p>Logout</p>
                
                
              </div>
            )}
          </div>
          <div className="BAG">
            <img src={BagIcon} alt="Bag" />
            <span class="cart-item-quantity">1</span>
          </div>
          <div className="MenuIcon">
            <img src={MenuIcon} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
