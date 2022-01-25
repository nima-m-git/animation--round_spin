import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import getCoords from "./getCoords.js";
import Square from "./components/Square/Square.js";
import SettingsBar from "./components/SettingsBar/SettingsBar.js";
import "./App.css";

const INITIAL_SETTINGS = {
  numPoints: 7,
  size: 25,
  duration: 5,
  backgroundColors: ["#F05", "#85F", "#0CF", "#32CD32", "#F05"],
  radius: 180,
};

const arrNumPoints = (numPoints) =>
  Array.from({ length: numPoints }, (_, i) => i);

function App() {
  const [settings, setSettings] = useState({ ...INITIAL_SETTINGS });
  const coords = useCallback(
    (point) => getCoords(point, settings.numPoints, settings.radius),
    [settings.numPoints, settings.radius]
  );

  useEffect(() => console.log(settings.duration));

  return (
    <div className="app">
      <motion.div
        className="graphics-container"
        key={[settings.duration, settings.numPoints]}
      >
        {arrNumPoints(settings.numPoints).map((point) => (
          <Square coords={coords(point)} key={point} settings={settings} />
        ))}
      </motion.div>

      <SettingsBar settings={settings} setSettings={setSettings} />
    </div>
  );
}

export default App;
