import React from "react";
import "./ThirdViewPort.css";
import image1 from "../../RESOURCES/shit4.png";
import image2 from "../../RESOURCES/shit2.png";
import image3 from "../../RESOURCES/Rectangle 21.png";
import shit from "../../RESOURCES/SHIT.png";
import crown from "../../RESOURCES/crown.png";
import ring1 from "../../RESOURCES/ring/ring 1.png";
import ring2 from "../../RESOURCES/ring/ring2.png";
import ring3 from "../../RESOURCES/ring/ring3.png";
import ring4 from "../../RESOURCES/ring/ring4.png";
import ring5 from "../../RESOURCES/ring/ring5.png";

function ThirdViewPort() {
  return (
    <>
      <div className="ThirdContainer">
        <div className="ManyPhotos">
          <div className="ButtonWithText">
            <button className="Blue-round-Button2">4590</button>
            <p>Trust Score</p>
          </div>
          <div className="BAAP" >
          <img src={image2} alt="" />
          <div className="RingParent">
            <div className="ManyRings">
              <img className="RING" src={ring1} alt="" />
              <img className="RING" src={ring2} alt="" />
              <img className="RING" src={ring3} alt="" />
              <img className="RING" src={ring4} alt="" />
              <img className="RING" src={ring5} alt="" />
            </div>
          </div>
          
          <div className="ImageRelative">
          <img src={image1} className="IMG1" alt="" />
          <img src={shit} className="Shit" alt="" />
          <img src={crown} className="Crown" alt="" />
          <img src={image3} className="IMG3" alt="" />
          </div>
          </div>
      
          
   
        </div>
        <div className="Content">
          
          <h1>Prishé’s</h1>
          <h2>Curology Line-up</h2>
          <p>
            {" "}
            Made with our Botanical Blend of lotus, gardenia, and white water
            lily, this formula helps soothe and nourish skin, so you stay
            beaming from the inside out.
          </p>
          <button className="KnowMore">Know More</button>
        </div>
      </div>
    </>
  );
}

export default ThirdViewPort;
