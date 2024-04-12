import useRouteChange from "@/src/shared/hooks/useRouteChange";
import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { sideBarItems, sideBarBottomItems } from "@/src/app/config/constants";
import SideBarFooterLogo from "./sideBarFooterLogo";
import { ICONS } from "@/src/shared/utils/icons";
const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
  const pathName = usePathname();

  const LogoutHandler = () => {
    signOut();
    redirect("./sign-in");
  };

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className={`p-2 py-5 flex items-center ${
                item.url === activeRoute ? "text-[#436bbd]" : ""
              }`}
            >
              <span className="text-3xl mr-2">{item.icon}</span>
              <span className="text-3xl mr-2">{item.title}</span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-5 flex items-center"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span className="text-3xl mr-2">{item.icon}</span>
                <span className="text-3xl mr-2">{item.title}</span>
              </Link>
            )
          )}
          <div
            className="p-2 py-5 flex items-center cursor-pointer border-b"
            onClick={LogoutHandler}
          >
            <span className="text-3xl mr-2">{ICONS.logOut}</span>
            <span className="text-xl">signOut</span>
          </div>
          <br />
          <div className="cursor-pointer">
            <SideBarFooterLogo />
          </div>
          <p className="text-lg text-center font-[400] pb-10">
            © 2024 SantTech, Inc. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

export default DashboardItems;
