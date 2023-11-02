import React, { useState } from 'react';
import './ItemGrid.css';
import image1 from "../../RESOURCES/Rectangle 11.png"
import image2 from "../../RESOURCES/Rectangle 12.png"
import image3 from "../../RESOURCES/Rectangle 13.png"
import image4 from "../../RESOURCES/Rectangle 14.png"

export default function ItemGrid() {
const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
const MyComponent = ({ image, text, PriceButton, AddToCardButton }) => {
  return (
    <div className='ProductGrid'>
      <img className='ProductImage' src={image} alt="Description of the image" />
      <p>{text}</p>
      <div className="ButtonContainer">
      <button className='PriceButton' >{PriceButton}</button>
      <button className='AddToCardButton'>{AddToCardButton}</button>
      </div>
      
    </div>
  );
};
  const componentData = [
    {
      imageURL: image1,
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹629',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: image2,
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹1549',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: image3,
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹899',
      AddToCardButton: 'ADD TO BAG',
    },
    {
      imageURL: image4,
      text: 'Weightless Eyeshadow StickWeightless Eyeshadow Stick',
      PriceButton: '₹618',
      AddToCardButton: 'ADD TO BAG',
    },
    // Add more data objects for additional components with different button text
  ];
const categories = ['Eye', 'Lips', 'Face' ,'View All'];
    return (
    <div className="ParentContainer">
      <div className="LeftSide">
        <div className="Left-text">
        <p>Choose by</p>
        <h1>Category</h1>
        </div>
        <hr />
        {categories.map((category) => (
          <button
            key={category}
            className={`Blue-round-Button ${selectedCategory === category ? 'selected' : ''}`}
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