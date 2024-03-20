import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import ToolBar from "./ToolBar";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 z-[999] border-b border-b[#00] px-5 md:px-10 flex justify-between items-center h-[70px] bg-white text-black">
      <div className="object-cover">
        <Image width={150} height={150} src="/sant.png" alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <NavItems />
        </div>
        <div>
          <ToolBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
