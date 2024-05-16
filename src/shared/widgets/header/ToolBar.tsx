"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ToolBar = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3">
      <Button color="primary" className="font-[400] md:font-[500] text-lg">
        Start Trial
      </Button>
      {user ? (
        <>
          <Link href={"/dashboard"} className="rounded-full">
            <Image
              src={user?.imageUrl}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link
          href={"/sign-up"}
          className="font-[400] md:font-[500] text-xl md:text-lg"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default ToolBar;
