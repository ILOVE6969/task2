import React from 'react';
import './Footer.css';
import logo from '../../RESOURCES/PB 1.png';
import LOGOLIST from '../../RESOURCES/ICONLIST.png';

export default function Footer() {
  return (
    <>
      <div className="Footer-Parent">
        <div className="Footer">
          <div className="LogoSide">
            <img src={logo} alt="" />
            <img src={LOGOLIST} alt="" />
            <p>www.prishebeauty.com</p>
          </div>
            <div className="LastGrid">
          <div className="OtherSide">
              <div className="grid-container1">
                <div className="grid-item">
                  <h1>Get in touch</h1>
                </div>
                <div className="grid-item">
                  <h1>Shop</h1>
                </div>
                <div className="grid-item">+91-1233445678</div>
                <div className="grid-item">Eyes</div>
                <div className="grid-item">know@prishebeauty.com</div>
                <div className="grid-item">Lips</div>
                <div className="grid-item">Kh No 1355/21354 E T C <br /> Ground Floor Chattarpur<br /> Delhi DL 110074 IN</div>
                <div className="grid-item">Face</div>
              </div>
              <div className="grid-container2">
                <div className="grid-item">
                  <h1>Company</h1>
                </div>
                <div className="grid-item">
                  <h1>Customer</h1>
                </div>
               
                <div className="grid-item">Who We Are</div>
                <div className="grid-item">Shipping & Return</div>
               
                <div className="grid-item">Mission & Vision</div>
                <div className="grid-item">FAQ</div>
                <div className="grid-item">Community</div>
                <div className="grid-item">Cancellation Policy</div>
              </div>
            </div>
          </div>
        </div>
              <hr />
              2023 Prishé Beauty All Right Reserved.
      </div>
    </>
  );
}
