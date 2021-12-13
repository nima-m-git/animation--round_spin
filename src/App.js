import React, { useState } from "react";
import { Frame } from "framer";

import Square from "./components/Square/Square.js";
import SettingsBar from "./components/SettingsBar/SettingsBar.js";
import "./App.css";

const numPoints = 15;
const r = 180;
const size = 20;
const duration = 5;
const backgroundColors = ["#F05", "#85F", "#0CF", "	#32CD32", "#F05"];
const degs = [0, 90, 270, 360];

const arrNumPoints = Array.from({ length: numPoints }, (_, i) => i);

const circleCoords = () => {
  let coords = [];
  for (let i = 0; i < 360; i++) {
    const rad = (i * Math.PI) / 180;
    coords.push([Math.cos(rad) * r, Math.sin(rad) * r]);
  }
  return coords;
};

const convert = (ratio, copy = circleCoords()) =>
  copy.concat(copy.splice(0, ratio * 360));

const getCoords = (i) => {
  const coordsOrdered = convert(i / numPoints);
  const x = coordsOrdered.map((set) => set[0]);
  const y = coordsOrdered.map((set) => set[1]);

  return [x, y];
};

function App() {
  const [settings, setSettings] = useState({
    backgroundColors,
    degs,
    duration,
    size,
  });
  return (
    <div className="app">
      <div className="graphics-container">
        {arrNumPoints.map((point) => (
          <Square coords={getCoords(point)} key={point} settings={settings} />
        ))}
      </div>

      <SettingsBar settings={settings} setSettings={setSettings} />
    </div>
  );
}

export default App;
