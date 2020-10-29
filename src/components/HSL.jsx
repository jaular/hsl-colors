import React, { useState } from "react";

import Slider from "./common/Slider";
import Tag from "./common/Tag";

const HSL = () => {
  const [saturation, setSaturation] = useState(75);
  const [lightness, setLightness] = useState(60);

  const items = Array.from(Array(36).keys());

  return (
    <>
      <section className="container max-width-adaptive-lg margin-y-lg">
        <Slider
          value={saturation}
          name="sliderSaturation"
          label="Saturation"
          onSlide={setSaturation}
        />
        <Slider
          value={lightness}
          name="sliderLightness"
          label="Lightness"
          onSlide={setLightness}
        />
        <ul className="grid-auto-sm gap-sm">
          {items.map((item, id) => (
            <Tag
              key={id}
              hue={item * 10}
              saturation={saturation}
              lightness={lightness}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default HSL;
