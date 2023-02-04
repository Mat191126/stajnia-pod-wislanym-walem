import React, { useState } from "react";
import NewsSliderContent from "./NewsSliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderNews from "./sliderNews";
import "../newsSlider/slider.scss";
import waitForElementTransition from 'wait-for-element-transition';

function NewsSlider() {

  const [activeIndex, setActiveIndex] = useState(0);
  const len = sliderNews.length - 1;

  document.addEventListener('DOMContentLoaded', function(event) {
    window.onload = function() {
      if(document.readyState === 'complete') {
        checkTextSize();
      }
    };
  });
  
  // When text touches dots - cut text and make 'raed more' button visible
  function checkTextSize() {
    // Get the news text
    let activeSlide = document.getElementsByClassName("active")[0];
    let text = activeSlide.getElementsByClassName("slide-text")[0];
    //Get the dots
    let dots = document.getElementsByClassName("all-dots")[0];
    //Get the read more button
    let readMoreButton = activeSlide.getElementsByClassName("read-more")[0];

    // Get the offset position of the text
    let textOffsetBottom = text.offsetTop + text.offsetHeight;
    // Get the offset position of the dots
    let dotsOffsetTop = dots.offsetTop; 

    if (textOffsetBottom >= dotsOffsetTop) {
        readMoreButton.classList.add("read-more-visible");
        text.classList.add("slide-text-cutted");
    }
  }

  return (
    <div className="slider-container">
      <NewsSliderContent 
        activeIndex={activeIndex} 
        sliderNews={sliderNews}
      />
      <Arrows
        prevSlide={() => {
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
            waitForElementTransition(document.getElementsByClassName("slides")[0]).then(() => {
              checkTextSize();
            });
          }
        }
        nextSlide={() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
            waitForElementTransition(document.getElementsByClassName("slides")[0]).then(() => {
              checkTextSize();
            });
          }
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderNews={sliderNews}
        onclick={(activeIndex) => {
            setActiveIndex(activeIndex);
            waitForElementTransition(document.getElementsByClassName("slides")[0]).then(() => {
              checkTextSize();
            });
          }
        }
      />
    </div>
  );
}

export default NewsSlider;
