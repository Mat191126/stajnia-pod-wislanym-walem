import React from "react";

function CuriositiesSliderContent({ activeIndex, sliderCuriosities }) {


  return (
      <section>
        {sliderCuriosities.map((curiosity, index) => (
          <div
            key={index}
            className={index === activeIndex ? "curiosity-slides curiosity-active" : "curiosity-inactive"}
          >
            <div className="curiosity">
              <p className="curiosity-text">{curiosity.curiosity_text}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

export default CuriositiesSliderContent;
