import { createContext } from "react";
import { useState } from "react";
import { foods } from "../constants";

export const FoodContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < foods.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const FoodContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setFoodItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  return (
    <FoodContext.Provider value={{ foodItems, addToCart }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
