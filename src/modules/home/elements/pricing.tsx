"use client";
import PricingCard from "@/src/shared/components/pricingCard";

import { Button } from "@nextui-org/react";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");
  return (
    <div className="w-full bg-[#f5edf5]">
      <div className="w-[95%] m-auto py-5">
        <div className="w-full md:flex justify-between">
          <div>
            <h3 className="font-semibold text-center lg:text-left uppercase text-cyber-ink text-[2rem] lg:text-[3rem]  max-w-4xl">
              Pricing
            </h3>
            <p className="text-3xl font-semibold text-center">
              Enjoy Our Unbeatable Price.
            </p>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Button
              className={`${
                active === "Monthly"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-black"
              } rounded-r-[0] !p-7 text-2xl !px-16 border border-[#000]`}
              onClick={() => setActive("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={`${
                active === "Yearly"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-black"
              } rounded-l-[0] !p-7 text-2xl !px-16 border border-[#000]`}
              onClick={() => setActive("Yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
