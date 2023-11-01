import React, { Component } from "react";
import "./ForthGrid.css";
import GIRL1 from "../../RESOURCES/GIRL1.png";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
    };
  }

  togglePanel = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { activeIndex } = this.state;
    const sections = [
      {
        title: "Eye",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
      {
        title: "Lips",
        content: [
          "Soft Pinch Tinted Lip Oil",
          "Soft Pinch Liquid Blush",
          "Positive Light Liquid Luminizer",
          "Warm Wishes Effortless Bronzer Stick"
        ],
      },
      {
        title: "Face",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
    ];

    return (
      <>
        <div className="ForthContainer">
          <div className="TextParent">
            <h1>How</h1>
            <h2>Prishé makes you precious</h2>
            <p>
              Together We’re building a safe, welcoming space in beauty and beyond. This is makeup made to feel good in, without hiding what makes you unique. And it’s all vegan and cruelty-free.
            </p>
            <div className="AccordianParent">
              {sections.map((section, index) => (
                <div key={index} className="accordion-container">
                  <button
                    className={`accordion ${activeIndex === index ? "active" : ""}`}
                    onClick={() => this.togglePanel(index)}
                  >
                    <div className="accordion-content">
                      <span className="accordion-title">{section.title}</span>
                      <span className="accordion-icon">{activeIndex === index ? "-" : "+"}</span>
                    </div>
                  </button>
                  <div
                    className="panel"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <ul className="panel-list">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="PhotoGirl">
            <img src={GIRL1} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Accordion;
