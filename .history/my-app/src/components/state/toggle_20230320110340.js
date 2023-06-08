import React, { useState } from "react";
import "./ToggleStyles.css";
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  return (
    <div>
      <div className="toggle">
        <div className="spinner"></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => on(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => on(false)}>
          Off
        </div>
      </div>
    </div>
  );
}
export default Toggle;
