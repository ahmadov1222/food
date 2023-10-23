import "./tabcontent.scss";
import { useState } from "react";
const Tabcontent = () => {
  const [activeTabContent, setActiveTabContent] = useState("Hot Dishes");
  return (
    <ul className="flex gap-8 mt-6 border-b pb-[13px]">
      <li
        className={`${
          activeTabContent === "Hot Dishes" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Hot Dishes")}
      >
        <button>Hot Dishes</button>
        <span
          className={`line ${
            activeTabContent === "Hot Dishes" ? "active" : ""
          }`}
        ></span>
      </li>
      <li
        className={`${
          activeTabContent === "Cold Dishes" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Cold Dishes")}
      >
        <button>Cold Dishes</button>
        <span
          className={`line  ${
            activeTabContent === "Cold Dishes" ? "active" : ""
          }`}
        ></span>
      </li>
      <li
        className={`${
          activeTabContent === "Soup" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Soup")}
      >
        <button>Soup</button>
        <span
          className={`line ${activeTabContent === "Soup" ? "active" : ""}`}
        ></span>
      </li>
      <li
        className={`${
          activeTabContent === "Grill" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Grill")}
      >
        <button>Grill</button>
        <span
          className={`line ${activeTabContent === "Grill" ? "active" : ""}`}
        ></span>
      </li>
      <li
        className={`${
          activeTabContent === "Appetizer" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Appetizer")}
      >
        <button>Appetizer</button>
        <span
          className={`line ${activeTabContent === "Appetizer" ? "active" : ""}`}
        ></span>
      </li>
      <li
        className={`${
          activeTabContent === "Dessert" ? "text-[#EA7C69]" : "text-[#fff]"
        }`}
        onClick={() => setActiveTabContent("Dessert")}
      >
        <button>Dessert</button>
        <span
          className={`line ${activeTabContent === "Dessert" ? "active" : ""}`}
        ></span>
      </li>
    </ul>
  );
};

export default Tabcontent;
