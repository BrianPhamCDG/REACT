import React from "react";

const Cell = (props) => {
  return (
    <div className="game-cell" onClick={props.onCLick}>
      {props.value}
    </div>
  );
};

export default Cell;
