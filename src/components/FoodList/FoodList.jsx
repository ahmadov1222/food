import React, { useState } from "react";
import "./foodlist.scss";
import { foods } from "../../constants";
import FoodItem from "../FoodItem/FoodItem";

const FoodList = () => {
  const [foodList, setFoodList] = useState(foods);
  return (
    <div className="mt-[34px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[20px] font-semibold">Choose Dishes</h3>
        <select className="bg-[#1F1D2B] p-[14px] rounded-lg font-[500] border border-[#393C49] text-[14px]">
          <option value="0">Dine In</option>
          <option value="1">To Do</option>
          <option value="2">Delivery</option>
        </select>
      </div>

      <ul className="h-[540px] overflow-auto pt-[60px] flex flex-wrap justify-between scrollbar">
        {foodList.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
