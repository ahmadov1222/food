import React, { useContext } from "react";
import "./fooditem.scss";
import { FoodContext } from "../../context/FoodContext";

const FoodItem = ({ food }) => {
  const { id, img, title, price, description } = food;
  const { foodItems, addToCart } = useContext(FoodContext);

  return (
    <li
      className="w-[220px]  rounded-xl bg-[#1F1D2B] text-center p-6 mb-[74px]"
      onClick={() => addToCart(food)}
    >
      <img
        className="w-[149px] h-[149px] rounded-full food-img"
        src={img}
        alt={title}
      />
      <h4 className="font-[500] text-[14px]">{title}</h4>
      <p className="font-[400] text-[14px]">$ {price}</p>
      <p className="font-[400] text-[14px] text-[#ABBBC2]">{description}</p>
    </li>
  );
};

export default FoodItem;
