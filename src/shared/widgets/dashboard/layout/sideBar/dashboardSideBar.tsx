import { ICONS } from "@/src/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import React from "react";
import DashboardItems from "./dashboardItems";
import UserPlan from "./userPlan";

const DashboardSideBar = () => {
  const { user } = useUser();

  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-white">
        <span className="text-2xl">{ICONS.home}</span>
        <h5 className="pl-2 pt-1 capitalize">{user?.username} Newsletters</h5>
      </div>
      <DashboardItems />
      <UserPlan />
      <DashboardItems bottomContent={true} />
    </div>
  );
};

export default DashboardSideBar;
