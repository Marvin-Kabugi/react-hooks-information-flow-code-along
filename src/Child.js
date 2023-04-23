import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {
  function hanleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return <div className="child" style={{ backgroundColor: color}} onClick={hanleClick} />;
}

export default Child;
