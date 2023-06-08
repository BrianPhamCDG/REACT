import React, { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on, setOn);
  return <div className="toggle" onClick={() => setOn(true)}></div>;
}
export default Toggle;
