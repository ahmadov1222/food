import { FoodContext } from "../../context/FoodContext";
import Paymentitem2 from "../Paymentitem/Paymentitem2";
import "./payment.scss";
import { useContext, useState } from "react";

const Payment = () => {
  const { payItems } = useContext(FoodContext);
  const [activeContent, setActiveContent] = useState("dine in");

  return (
    <div className="flex flex-col payment w-[409px] bg-[#1f1d2b] absolute right-0 bottom-0 top-0 rounded-lg p-6 ">
      <h3 className="text-white text-xl font-semibold">Orders #34562</h3>
      <ul className="flex gap-2 my-6">
        <li className="i">
          <button
            className={`btn py-[7px] px-4 text-[#EA7C69] border border-[#393C49] rounded-lg ${
              activeContent === "dine in" ? "active" : ""
            }`}
            onClick={() => setActiveContent("dine in")}
          >
            Dine In
          </button>
        </li>

        <li className="i">
          <button
            className={`btn py-[7px] px-4 text-[#EA7C69] border border-[#393C49] rounded-lg ${
              activeContent === "to go" ? "active" : ""
            }`}
            onClick={() => setActiveContent("to go")}
          >
            To Go
          </button>
        </li>

        <li className="i">
          <button
            className={`btn py-[7px] px-4 text-[#EA7C69] border border-[#393C49] rounded-lg ${
              activeContent === "delivery" ? "active" : ""
            }`}
            onClick={() => setActiveContent("delivery")}
          >
            Delivery
          </button>
        </li>
      </ul>

      <div className="flex justify-between items-center pb-6 border-b border-[#393C49]">
        <p className="text">Item</p>
        <ul className="flex gap-[43px]">
          <li className="l">Qty</li>
          <li className="l">Price</li>
        </ul>
      </div>

      <div className="payment-list grow">
        {payItems.length > 0 && payItems.map(
          (food) =>
            (
              <Paymentitem2
                key={food.id}
                food={food}
              />
            )
        )}
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-[#ABBBC2] text-[14px] font-normal">Discount</p>
          <p className="text-[14px] font-normal">$0</p>
        </div>

        <div className="flex justify-between items-center mb-[42px]">
          <p className="text-[#ABBBC2] text-[14px] font-normal">Sub total</p>
          <p className="text-[14px] font-normal">$21,03</p>
        </div>
        <button className="w-full text-center p-[14px] bg-[#EA7C69] rounded-lg">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
