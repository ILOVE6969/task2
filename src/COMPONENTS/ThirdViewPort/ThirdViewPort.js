import React from "react";
import "./ThirdViewPort.css";
import Hero from "../../RESOURCES/HERO1.png"


function ThirdViewPort() {
  return (
    <>
      <div className="ThirdContainer">
        <div className="ManyPhotos">
          <img src={Hero} alt="" />
        </div>
        <div className="Content">
          
          <h1>Prishé’s</h1>
          <h2>Curology Line-up</h2>
          <hr className="blue" />
          <div className="small-blue" />
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
