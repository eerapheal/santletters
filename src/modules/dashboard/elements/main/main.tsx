"use client";
import DashboardOverView from "@/src/shared/components/cards/dashboardOverView";
import { useUser } from "@clerk/nextjs";

import React from "react";

const Main = () => {
  const { user } = useUser();

  return (
    <div className="p-5 w-full bg-white">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hey {user?.fullName}
      </h1>
      <p className="opacity-[.7] text-sm">Here is how your Publication</p>
      <div className="w-full flex">
        <div className=" min-h-[88vh]  pr-5">
          <DashboardOverView />
        </div>
      </div>
    </div>
  );
};

export default Main;
