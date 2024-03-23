import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div className="bg-[#f7f5ff] pt-20">
      <div className=" flex flex-col  justify-center items-center">
        <div className="">
          <h1
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              background:
                "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className=" uppercase font-bold  text-[2rem] xl:text-[4rem] mx-auto text-center"
          >
            Empowering Profit-Minded Individuals with Information and Earning
            Opportunities,
          </h1>
          <br />
          <h3
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              background:
                "linear-gradient(to right, #87ceeb, #1e90ff, #00bfff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-3xl text-center lg:text-4xl"
          >
            our Newsletter Platform is Tailored for Success.
          </h3>
          <br />
          <div className="flex w-full justify-center">
            <Button color="primary" className="text-xl !p-8">
              Get Started
            </Button>
          </div>
          <br />
          <h5 className="text-center text-3xl lg:text-4xl">
            Start 30days free trial, no credit card required.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
