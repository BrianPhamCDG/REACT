import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;

const CardList = (props) => {
  return (
    <StyleCardList>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </StyleCardList>
  );
};

export default CardList;
