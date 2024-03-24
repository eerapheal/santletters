import { partners } from "@/src/app/config/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Branding = () => {
  return (
    <div className="border-b border-[#000] py-10">
      <div className="w-full text-center pt-1">
        <h3 className="uppercase text-blue-700 text-xl md:text-2xl text-center inline-block font-medium z-20 relative">
          OUR TOP NEWSLETTERS PARTNERS
        </h3>
      </div>
      <Marquee className="w-full flex justify-around">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image
              src={i.url}
              key={i.url}
              width={100}
              height={100}
              alt="partner"
              className={`md:mx-8 w-[100px] h-[100] md:w-[100px] mx-3`}
            />
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;
