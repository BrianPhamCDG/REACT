import React from "react";
import Card from "./Card";
import styled from "styled-components";
import CardTailwind from "./CardTailwind";

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;

const CardList = (props) => {
  return (
    <StyleCardList>
      <CardTailwind></CardTailwind>
    </StyleCardList>
  );
};

export default CardList;
