import React, { useState, useEffect } from "react";

const FlipText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  const flipTextStyles = {
    transform: `translateY(-${100 * currentIndex}%)`,
    transition: "transform 1s",
  };

  const flipTextItemStyles = {
    position: "absolute",
    width: "max-content",
  };

  return (
    <div
      style={{
        perspective: "1px",
        overflow: "hidden",
        height: "max-content",
      }}
    >
      <div style={{ ...flipTextStyles, height: 20 }}>
        {texts.map((text, index) => (
          <div
            key={index}
            style={{ ...flipTextItemStyles, top: `${100 * index}%` }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const texts = [
    "Search For Your Beautiful Face",
    "Its your Search Place",
    "Search For Your Beautiful Lips",
    "Search For Your Beautiful Eyes",
  ];

  return (
    <div className="App">
      <FlipText texts={texts} />
    </div>
  );
};

export default App;
