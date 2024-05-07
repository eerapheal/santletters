"use client";
import { ICONS } from "@/src/shared/utils/icons";
import Link from "next/link";
const Page = () => {

  return (
    <div className="w-full flex bg-[#F7F7F7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        <Link
          href={"/dashboard/write"}
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
      </div>

    </div>
  );
};

export default Page;
