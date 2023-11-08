import React from "react";
import "./FifthGrid.css";
import INSTAGIRL1 from "../../RESOURCES/INSTAGIRL1.png";
import INSTAGIRL2 from "../../RESOURCES/INSTAGIRL2.png";
import INSTAICON from "../../RESOURCES/🦆 icon _instagram_.png";
import FACEBOOKICON from "../../RESOURCES/🦆 icon _facebook squared_.png";

import SMALLINSTA from "../../RESOURCES/🦆 icon _instagram icon_.svg";

export default function FifthGrid() {
  return (
    <>
      <div className="FifthParent">
        <div className="TextContent">
          <h1>Prishé People</h1>
          <p>
            It has always been our mission to help everyone celebrate their
            individuality by redefining what beautiful means. We strive to
            promote self-acceptance and make a difference in the world
          </p>
          <div className="IconGrid">
              <img src={INSTAICON} alt="" />
              <img src={FACEBOOKICON} alt="" />
            </div>
          <div className="OvalButton">
            <button>{"<"}</button>
            <button> {">"} </button>
          </div>
        </div>

        <div className="InstaImage">
          <div className="IconWithGirl">
            <img className="INSTAGIRL1" src={INSTAGIRL1} alt="" />
          </div>
          <div className="Flaoting-Text Relative">
            <div className="ImageParent">
            <img className="INSTAGIRL2" src={INSTAGIRL2} alt="" />
            </div>
            <div className="InstaBanner">
              <div className="InstaHandle">
                <img src={SMALLINSTA} alt="" />
                @Smritaroy_zoel
              </div>
              <p>
                Prishé Beauty eye linear and blush highlighter is surely
                different from other brands’ products, I can feel the texture
                and thickness of the liquid, this made my special day aweome.
                #makeover #myday
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
