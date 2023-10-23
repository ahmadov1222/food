import React from "react";
import { Payment } from "../../components/Payment";
import "./main.scss";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import Tabcontent from "../../components/TabContent/Tabcontent";
import FoodList from "../../components/FoodList/FoodList";

const Home = () => {
  return (
    <div className="home-page w-full h-screen relative pr-[409px]">
      <div className="home-content">
        <Searchbar />
        <Tabcontent />
        <FoodList />
      </div>
      <Payment />
    </div>
  );
};

export default Home;
