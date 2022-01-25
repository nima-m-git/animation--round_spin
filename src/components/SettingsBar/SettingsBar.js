import { useEffect } from "react";
import { SketchPicker } from "react-color";

// const numPoints = 15;
// const radius = 120;
// const size = 20;
// const duration = 5;
// const colors = ["#F05", "#85F", "#0CF", "	#32CD32", "#F05"];
// const degs = [0, 180, 360];

// const numColors = 5;

const SettingsBar = ({ setSettings, settings }) => {
  const handleChange = (val, field) => {
    setSettings({
      ...settings,
      [field]: val,
    });
  };

  return (
    <div className="settings-bar">
      <form>
        <label>
          Number of Points
          <input
            type="number"
            value={settings.numPoints}
            onChange={(e) =>
              handleChange(parseInt(e.target.value), "numPoints")
            }
          />
        </label>
        <label>
          Radius
          <input
            type="number"
            value={settings.radius}
            onChange={(e) => handleChange(parseInt(e.target.value), "radius")}
          />
        </label>
        <label>
          Size
          <input
            type="number"
            value={settings.size}
            onChange={(e) => handleChange(parseInt(e.target.value), "size")}
          />
        </label>
        <label>
          Speed
          <input
            type="number"
            value={settings.duration}
            onChange={(e) => handleChange(parseInt(e.target.value), "duration")}
          />
        </label>
        {/* {[...Array(numColors).keys()].map((i) => {
          return (
            <label>
              Color #{i}
              <SketchPicker
                color={settings.colors[i]}
                key={i}
                onChange={(color, e) =>
                  handleChange(
                    [...settings.colors.splice(i, 0, color.hex)],
                    "colors"
                  )
                }
              />
            </label>
          );
        })} */}
      </form>
    </div>
  );
};

export default SettingsBar;
