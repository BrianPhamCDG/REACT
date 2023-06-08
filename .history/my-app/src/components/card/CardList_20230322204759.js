import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      <Card>{props.children}</Card>
    </div>
  );
};

export default CardList;
