import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  const [board, setBoard] = useState();
  return (
    <div>
      <Board cells={board}></Board>
    </div>
  );
};

export default Game;
