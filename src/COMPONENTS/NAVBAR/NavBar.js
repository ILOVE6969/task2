import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../RESOURCES/PB 1.png';
import PersonIcon from "../../RESOURCES/PersonIcon.svg";
import BagIcon from "../../RESOURCES/BAG.svg";
import MenuIcon from "../../RESOURCES/Menu Icon.svg";
import SearchIcon from "../../RESOURCES/🦆 icon _search_.png";
import AnimatedText from "../../COMPONENTS/NAVBAR/AnimatedText";

const Navbar = () => {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);
  const [isPersonMenuOpen, setPersonMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimatedParentVisible, setAnimatedParentVisible] = useState(true);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false); // Add state for the side menu

  const toggleShopMenu = () => {
    setShopMenuOpen(!isShopMenuOpen);
  };

  const togglePersonMenu = () => {
    setPersonMenuOpen(!isPersonMenuOpen);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const handleSearchInputClick = () => {
    setAnimatedParentVisible(false);
  };

  const handleSearchInputBlur = () => {
    setAnimatedParentVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="LeftHuMe">
          <img className="LOGO1" src={logo} alt="nothing" />
          <div className="searchbar">
            <img className='SearchIcon' src={SearchIcon} alt="Search" />
            <input
              type="text"
              id="search"
              className="invisible-search"
              placeholder="Search prishé beauty products"
              onClick={handleSearchInputClick}
              onBlur={handleSearchInputBlur}
            />
            {isAnimatedParentVisible && (
              <div className="Animated-Parent">
                <div className="AnimatedText">
                  <AnimatedText />
                </div>
              </div>
            )}
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
            <div className="bullet"></div>
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
                <p>Saved Addresses</p>
                <hr />
                <p>Edit Profile</p>
                <p>Logout</p>
              </div>
            )}
          </div>
          <div className="BAG">
            <img src={BagIcon} alt="Bag" />
            <span className="cart-item-quantity">1</span>
          </div>
          <div className="MenuIcon" onClick={toggleSideMenu}>
            <img src={MenuIcon} alt="Menu" />
          </div>
        </div>
      </div>
      {isSideMenuOpen && (
        <div className='MenuKaBaap'>
          <div className="ScreenFilter" onClick={toggleSideMenu}></div>
          <div className="SideMenu">
            <span className="CloseButton" onClick={toggleSideMenu}>
              &times;
            </span>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>About Our Founder</li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
