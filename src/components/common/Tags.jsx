import React from "react";

import Tag from "./Tag";

import { HSLToHex } from "../../helpers/HSLToHex";
import { HSLToRGB } from "../../helpers/HSLToRGB";

const Tags = ({ hue, saturation, lightness }) => {
  const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const lightnessColor =
    lightness <= 20 ? parseFloat(lightness) + 50 : lightness - 50;
  const textColor = `hsl(${hue}, ${saturation}%, ${lightnessColor}%)`;

  const displayHSL = `hsl(${hue}°, ${saturation}%, ${lightness}%)`;
  const displayHEX = HSLToHex(hue, saturation, lightness);
  const displayRGB = HSLToRGB(hue, saturation, lightness);

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
    {
      id: 3,
      text: "RGB",
      displayColor: displayRGB,
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
