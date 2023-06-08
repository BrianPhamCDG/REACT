import React, { useState } from "react";
import "./ToggleStyles.css";
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  return (
    <div>
      <div className="toggle" onClick={() => setOn(true)}>
        <div className="spinner"></div>
      </div>
    </div>
  );
}
export default Toggle;
