import React, { useState } from 'react';
import './ItemGrid.css';
import FirstBackground from "../../RESOURCES/FIRST.png";
import image1 from "../../RESOURCES/Rectangle 11.png";
import image2 from "../../RESOURCES/Rectangle 12.png";
import image3 from "../../RESOURCES/Rectangle 13.png";
import image4 from "../../RESOURCES/Rectangle 14.png";
import image1_hover from "../../RESOURCES/monkey.jpg";
import image2_hover from "../../RESOURCES/monkey.jpg";
import image3_hover from "../../RESOURCES/monkey.jpg";
import image4_hover from "../../RESOURCES/monkey.jpg";

export default function ItemGrid() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const MyComponent = ({ image, text, PriceButton, AddToCardButton }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className='ProductGrid'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className='ProductImage'
          src={isHovered ? image.hover : image.default}
          alt="Description of the image"
        />
        <p>{text}</p>
        <div className="ButtonContainer">
          <button className='PriceButton'>{PriceButton}</button>
          <button className='AddToCardButton'>{AddToCardButton}</button>
        </div>
      </div>
    );
  };

  const componentData = [
    {
      imageURL: {
        default: image1,
        hover: image1_hover,
      },
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹629',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: {
        default: image2,
        hover: image2_hover,
      },
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹1549',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: {
        default: image3,
        hover: image3_hover,
      },
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹899',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: {
        default: image4,
        hover: image4_hover,
      },
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹618',
      AddToCardButton: 'ADD TO BAG',
    },
    // Add more data objects for additional components with different button text
  ];

  const categories = ['Eye', 'Lips', 'Face', 'View All'];

  return (
    <div className="ParentContainer">
      <div className="LeftSide">
        <div className="Left-text">
          <p>Choose by</p>
          <h1>Category</h1>
        </div>
        <hr />
        {categories.map((category, index) => (
          <button
            key={category}
            className={`Blue-round-Button ${index === 3 ? "no-border" : ""} ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="RightSide">
        {componentData.map((data, index) => (
          <MyComponent
            key={index}
            image={data.imageURL}
            text={data.text}
            PriceButton={data.PriceButton}
            AddToCardButton={data.AddToCardButton}
          />
        ))}
      </div>
    </div>
  );
}
