import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const FeaturesHighLights = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center  justify-center bg-[#9399F4] py-5 px-3 text-center md:text-left md:min-h-[55vh]">
      <div className="w-full flex justify-center items-center md:w-[50%] min-h-full">
        <Image
          src="https://mumbrella.com.au/wp-content/uploads/2019/05/10daily_NWB.jpg"
          alt=""
          width={400}
          height={400}
          className="w-[97%] h-full"
        />
      </div>
      <div className="flex items-center flex-col justify-center md:w-[50%]">
        <div className="flex items-center flex-col justify-center pt-5 md-pt-0 text-center">
          <h2 className="uppercase text-cyber-ink text-3xl md:text-5xl mx-auto mb-2 md:text-left">
            CREATE
          </h2>
          <h3 className="text-cyber-ink text-xl md:text-3xl max-w-lg font-semibold">
            Access the most potent editing and design tools for email.
          </h3>
          <br />
          <p className="text-cyber-ink text-xl md:text-2xl max-w-lg font-[400]">
            With our comprehensive suite of features, elevate your emails to new
            heights of engagement and impact.
          </p>
          <br />
        </div>
        <Button className="bg-white border-[2px] border-[#000] rounded text-2xl !p-7 !px-16">
          Start Building
        </Button>
      </div>
    </div>
  );
};

export default FeaturesHighLights;
