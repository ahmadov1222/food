import { createContext } from "react";
import { useState } from "react";
import { foods } from "../constants";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [payItems, setPayItems] = useState([]);

  const addToCart = (food) => {
    setPayItems([...payItems, food]);
  };

  return (
    <FoodContext.Provider value={{ payItems, addToCart }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
