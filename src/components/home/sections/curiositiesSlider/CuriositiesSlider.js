import React, { useEffect, useState } from "react";
import CuriositiesSliderContent from "./CuriositiesSliderContent";
import sliderCuriosities from "./sliderCuriosities";
import './curiositiesSlider.scss';

const curiosistiesLength = sliderCuriosities.length - 1;

function NewsSlider() {

  const [activeIndex, setActiveIndex] = useState(0);

  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  function createArrayOfNumbers(start, end){
      let myArray = [];
      for(let i = start; i <= end; i++) { 
          myArray.push(i);
      }
      return myArray;
  }

  let numbersArray = createArrayOfNumbers(0, curiosistiesLength);

  //main method running generation of random non-repeating index
  function getRandomNonRepeatingIndex() {
    if (numbersArray.length === 0) {
      numbersArray = createArrayOfNumbers(0, curiosistiesLength);
    }
    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1)
    return randomNumber;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(getRandomNonRepeatingIndex());
    }, 10000);
    return () => clearInterval(interval);
  }, []);


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
