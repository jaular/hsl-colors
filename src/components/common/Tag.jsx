import React from "react";

const Tag = ({ hue, saturation, lightness }) => {
  const bkgrdColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const lightnessColor =
    lightness <= 20 ? parseFloat(lightness) + 50 : lightness - 50;
  const textColor = `hsl(${hue}, ${saturation}%, ${lightnessColor}%)`;

  const displayColor = `${hue}°, ${saturation}%, ${lightness}%`;

  /* 
    hsl(hue, saturation, lightness)
    Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
    Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
    Lightness is also a percentage; 0% is black, 100% is white.
  */

  return (
    <li>
      <div
        className="tag align-center"
        style={{ backgroundColor: bkgrdColor, color: textColor }}
      >
        <p className="text-base">{hue}</p>
        <p className="text-xs padding-top-xxs">{displayColor}</p>
      </div>
    </li>
  );
};

export default Tag;
