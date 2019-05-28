import React from "react";
import RSSpinner from "react-spinkit";

const typeToName = (type: string) => {
  switch (type) {
    case "CircleFlip": {
      return "circle";
    }
    case "Bounce": {
      return "three-bounce";
    }
    case "Wave": {
      return "wave";
    }
    case "WanderingCubes": {
      return "wandering-cubes";
    }
    case "Pulse": {
      return "double-bounce";
    }
    case "ChasingDots": {
      return "chasing-dots";
    }
    case "ThreeBounce": {
      return "three-bounce";
    }
    case "Circle": {
      return "circle";
    }
    case "9CubeGrid": {
      return "cube-grid";
    }
    case "WordPress": {
      // (IOS only)
      return "wordpress";
    }
    case "FadingCircle": {
      return "circle";
    }
    case "FadingCircleAlt": {
      return "circle";
    }
    // case "Arc": { // (IOS only)
    //   return ""
    // }
    // case "ArcAlt": { // (IOS only)
    //   return ""
    // }
  }

  return;
};

const Spinner = ({
  isVisible,
  color,
  size,
  type
}: {
  isVisible: boolean;
  color: string;
  size: number;
  type: string;
}) => (
  <RSSpinner
    name={typeToName(type)}
    color={color}
    style={{
      display: isVisible ? "inline-block" : "none",
      width: size,
      height: size
    }}
  />
);

export default Spinner;
