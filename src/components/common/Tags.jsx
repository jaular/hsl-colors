import React from "react";

import Tag from "./Tag";

import { HSLToHex } from "../../helpers/HSLToHex";

const Tags = ({ hue, saturation, lightness }) => {
  const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const lightnessColor =
    lightness <= 20 ? parseFloat(lightness) + 50 : lightness - 50;
  const textColor = `hsl(${hue}, ${saturation}%, ${lightnessColor}%)`;

  const displayHSL = `hsl(${hue}°, ${saturation}%, ${lightness}%)`;

  /* 
    hsl(hue, saturation, lightness)
    Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
    Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
    Lightness is also a percentage; 0% is black, 100% is white.
  */

  const displayHEX = HSLToHex(hue, saturation, lightness);

  const colors = [
    {
      id: 1,
      text: "HSL",
      displayColor: displayHSL,
    },
    {
      id: 2,
      text: "HEX",
      displayColor: displayHEX,
    },
  ];

  return (
    <ul className="grid-auto-md gap-md">
      {colors.map((color) => (
        <Tag
          key={color.id}
          data={color}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      ))}
    </ul>
  );
};

export default Tags;
