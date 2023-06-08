import React from "react";
import { useGallery } from "./gallery-context";

const CardList = () => {
  const { cartItems } = useGallery();
  console.log(cartItems);
  return (
    <div className="py-10 px-5">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div className="flex justify-between items-center" key={item.id}>
            <img src={item.url} alt="" />
          </div>
        ))}
      ;
    </div>
  );
};

export default CardList;
