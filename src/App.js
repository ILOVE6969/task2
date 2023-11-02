import React from 'react'
import NavBar from "./COMPONENTS/NAVBAR/NavBar"
import VideoBackground from './COMPONENTS/VIDEO BACKGROUND/VideoBackground';
import ITEM_GRID from './COMPONENTS/ItemGrid/ItemGrid';
import ThirdViewPort from './COMPONENTS/ThirdViewPort/ThirdViewPort';
import ForthGrid from './COMPONENTS/ForthGrid/ForthGrid'
import FifthGrid from './COMPONENTS/FifthGrid/FifthGrid';
import SixthViewPort from './COMPONENTS/SixthViewPort/SixthViewPort';
import Footer from './COMPONENTS/FOOTER/Footer'
import SKINTONE from './COMPONENTS/SKIN TONE/SKIN TONE';


function App() {
  return (
    <>  
    <NavBar />          
    <VideoBackground />
    <ITEM_GRID />
    <SKINTONE />
    <ThirdViewPort />
    <FifthGrid />
    <SixthViewPort />
    <Footer />
    
    </>
  );
}

export default App;
