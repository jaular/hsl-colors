import React, { useEffect } from "react";

const Slider = ({ name, value, label, max, onSlide }) => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = process.env.PUBLIC_URL + "/static/js/_1_slider.js"; // 👈 make sure to use the correct path
    frontEnd.id = "slider-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("slider-js").remove();
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    onSlide(value);
  };

  return (
    <div className="margin-bottom-md">
      <div className="slider js-slider">
        <div className="slider__range">
          <label htmlFor={name}>{label}</label>
          <input
            className="slider__input"
            type="range"
            id={name}
            name={name}
            min="0"
            max={max}
            step="1"
            value={value}
            onChange={handleChange}
          />
        </div>

        <div className="text-center margin-top-xxxs" aria-hidden="true">
          <span className="slider__value text-sm">
            <span className="js-slider__value">{value}</span>%
          </span>
        </div>
      </div>
    </div>
  );
};
export default Slider;
