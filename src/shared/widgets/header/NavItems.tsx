import { navItems } from "@/src/app/config/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="w-full hidden md:flex gap-5 items-center">
      {navItems.map((i: NavItems, index: number) => (
        <Link key={index} href={"/"} className="text-lg">
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
