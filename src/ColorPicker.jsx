import { useState } from "react";

function ColorPicker(props) {
  const [color, setColor] = useState("#000000");

  function handleColorPicker(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color-picker-container">
      <div className="color-display" style={{ backgroundColor: color }}>
        <h1>{color}</h1>
      </div>
      <label htmlFor="inputColor">Select a Color</label>
      <input
        type="color"
        id="inputColor"
        value={color}
        onChange={handleColorPicker}
      />
    </div>
  );
}

export default ColorPicker;
