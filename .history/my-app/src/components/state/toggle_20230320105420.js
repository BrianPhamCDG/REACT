import React, { useState } from "react";
import "./ToggleStyles";
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  return (
    <div className="toggle" onClick={() => setOn(true)}>
      Toggle
    </div>
  );
}
export default Toggle;
