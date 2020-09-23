import React, { Component } from "react";

import Heading from "./components/Heading";
import Slider from "./components/Slider";
import Tag from "./components/Tag";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    saturation: 75,
    lightness: 60,
  };

  handleSaturation = (value) => {
    this.setState({ saturation: value });
  };

  handleLightness = (value) => {
    this.setState({ lightness: value });
  };

  render() {
    const items = Array.from(Array(37).keys());
    const { saturation, lightness } = this.state;
    return (
      <React.Fragment>
        <Heading />
        <section className="container max-width-adaptive-lg margin-y-lg">
          <Slider
            value={saturation}
            name="sliderSaturation"
            label="Saturation"
            onSlide={this.handleSaturation}
          />
          <Slider
            value={lightness}
            name="sliderLightness"
            label="Lightness"
            onSlide={this.handleLightness}
          />
          <ul className="grid-auto-md gap-sm">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
