import React, { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  return <div className="toggle"></div>;
}
export default Toggle;
