import React from "react";
import { Payment } from "../../components/Payment";
import "./main.scss";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import TabContent from "../../components/TabContent/TabContent";
import FoodList from "../../components/FoodList/FoodList";

const Home = () => {
  return (
    <div className="home-page w-full h-screen relative pr-[409px]">
      <div className="home-content">
        <Searchbar />
        <TabContent />
        <FoodList />
      </div>
      <Payment />
    </div>
  );
};

export default Home;
