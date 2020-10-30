import React, { useState } from "react";

import Slider from "./common/Slider";
import Tags from "./common/Tags";

const HSL = () => {
  const [hue, setHue] = useState(150);
  const [saturation, setSaturation] = useState(75);
  const [lightness, setLightness] = useState(60);

  // const items = Array.from(Array(1).keys());

  return (
    <section>
      <div className="container max-width-adaptive-sm">
        <div className="grid gap-md items-center">
          <div className="col-6@md">
            <Slider
              value={hue}
              name="sliderHue"
              label="Hue"
              max={360}
              onSlide={setHue}
            />
            <Slider
              value={saturation}
              name="sliderSaturation"
              label="Saturation"
              max={100}
              onSlide={setSaturation}
            />
            <Slider
              value={lightness}
              name="sliderLightness"
              label="Lightness"
              max={100}
              onSlide={setLightness}
            />
          </div>
          <div className="col-6@md">
            <Tags hue={hue} saturation={saturation} lightness={lightness} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HSL;
