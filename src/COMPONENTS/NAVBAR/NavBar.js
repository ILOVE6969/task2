import React from 'react';
import './NavBar.css';
import logo from '../../RESOURCES/PB 1.png';
import SearchIcon from "../../RESOURCES/🦆 icon _search_.png"
import LeftImage from"../../RESOURCES/Vector.png"
import RightImage from"../../RESOURCES/Group 6.png"
import MiddleImage from "../../RESOURCES/Vector 20.png"


const Navbar = () => {

  return (
    <>
      <div className="Navbar">
            <div className="LeftHuMe">
            <img className="LOGO1" src={logo} alt="nothing" />
            <div className="searchbar " >
              <input type="text" id="search" className="invisible-search" placeholder="Search prishé beauty products" />
              <img className='Searchicon' src={SearchIcon}  alt="" />
            </div>
            </div>
        <div className="Right-Icon">
              <div className="Icon1">
                <img src={LeftImage} alt="" />
                <div id="number">1</div>
                
              </div>
              <div className="Middle-Icon">
                <img src={MiddleImage} alt="" />
              </div>
              <div className="Icon2">
                <img src={RightImage} alt="" />
              </div>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;