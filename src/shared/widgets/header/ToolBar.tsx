"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const ToolBar = () => {
  return (
    <div className="flex items-center gap-3">
      <Button color="primary" className="font-[400] md:font-[500] text-lg">
        Start Trial
      </Button>
      <Link href={"/sign-up"} className="font-[400] md:font-[500] text-xl md:text-lg">
        Login
      </Link>
    </div>
  );
};

export default ToolBar;
