import React from 'react'
import "./Footer.css"
import logo from "../../RESOURCES/PB 1.png"
import LOGOLIST from "../../RESOURCES/ICONLIST.png"

export default function Footer() {
  return (
    <>
    <div className="Footer">
      <div className="LogoSide">
        <img src={logo} alt="" />
        <h2>Get in touch</h2>
        <span>+91-1233445678</span>
        <span>know@prishebeauty.com</span>
        <span>C-10, First Floor, Sector-3
        <p>Noida, U.P, 201301 </p></span>
      </div>
      <div className="OtherSide">
        <img src={LOGOLIST} alt="" />
        <p>www.prishebeauty.com</p>
        <div className="LastGrid">
        <div className="grid-container">
      <div className="grid-item">
        <h1>Shop</h1>
      </div>
      <div className="grid-item">
        <h1>Company</h1>
      </div>
      <div className="grid-item">
        <h1>Customer</h1>
      </div>
      <div className="grid-item">Eyes</div>
      <div className="grid-item">Who We Are</div>
      <div className="grid-item">Shipping & Return</div>
      <div className="grid-item">Lips</div>
      <div className="grid-item">M&V</div>
      <div className="grid-item">FAQ</div>
      <div className="grid-item">Face</div>
      <div className="grid-item">Community</div>
      <div className="grid-item">Cancellation Policy</div>
    </div>
        </div>
      </div>
    </div>
    <div className="margin90">
      
    <hr />
    2023 Prishé Beauty All Right Reserve.  
     </div>
    </>
  )
}
