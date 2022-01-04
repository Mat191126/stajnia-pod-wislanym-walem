import React from "react";

function SliderContent({ activeIndex, sliderNews }) {

  return (
    <section>
      {sliderNews.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="left-panel">
            <span className="slide-date">{slide.date}</span>
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-text">{slide.text}</p>
            <a className="read-more" href="">Read more...</a>
          </div>
          <div className="right-panel">
            <img className="news-image" src={slide.image_url} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
