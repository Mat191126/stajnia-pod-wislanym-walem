import React, { useEffect, useState } from "react";
import CuriositiesSliderContent from "./CuriositiesSliderContent";
import sliderCuriosities from "./sliderCuriosities";
import './curiositiesSlider.css';

const len = sliderCuriosities.length - 1;

function NewsSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="curiosities-slider-container">
      <CuriositiesSliderContent 
        activeIndex={activeIndex} 
        sliderCuriosities={sliderCuriosities}
      />
    </div>
  );
}

export default NewsSlider;
