import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import ToolBar from "./ToolBar";
import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 z-[999] border-b border-b[#00] px-5 md:px-10 flex justify-between items-center h-[70px] bg-white text-black">
      <Link href={"/"}>
        <Logo />
      </Link>
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
