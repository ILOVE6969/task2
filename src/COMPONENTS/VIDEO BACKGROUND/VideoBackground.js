import React from 'react'
import BackGround from "../../RESOURCES/background.mp4"
import "../VIDEO BACKGROUND/VideoBackground.css"

export default function VideoBackground() {
  return (
    <>
    
    <div className="video-background">
        <video autoPlay muted loop id="video-bg">
            <source src={BackGround} type="video/mp4" />
        </video>
       
    <div className="gradient-overlay">
        </div>
        <div className="Eternal_Text">
          <h1>Eternal Beauty</h1>
          <p>is no longer a dream</p>
          <hr />
          <div className="discount-button">
            <button className="Blue-Button">
              Discover Products
            </button>
            <div className="Discount-Text"> 
            <h3>25% Discount </h3>
            on selected Prishé products
            </div>
          </div>
        </div>
    </div>    
    </>
  )
}
