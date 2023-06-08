import React from "react";
import { useGallery } from "./gallery-context";

const CardList = () => {
  const { cartItems } = useGallery();
  return <div>Item here</div>;
};

export default CardList;
