import React from "react";
import { useGallery } from "./gallery-context";

const CardList = () => {
  const { cartItems } = useGallery();
  console.log(cartItems);
  return <div>Item here</div>;
};

export default CardList;
