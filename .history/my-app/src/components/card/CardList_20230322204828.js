import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      <Card></Card>
      {props.children}
    </div>
  );
};

export default CardList;
