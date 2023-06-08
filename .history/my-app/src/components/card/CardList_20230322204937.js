import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyleCardList = styled.div``;

const CardList = (props) => {
  return (
    <div>
      <Card>{props.children}</Card>
    </div>
  );
};

export default CardList;
