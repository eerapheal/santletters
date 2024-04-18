"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import DashboardSideBar from "../widgets/dashboard/layout/sideBar/dashboardSideBar";
import { Toaster } from "react-hot-toast";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();
  const { isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  };

  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-in" &&
      pathname !== "/subscribe" &&
      pathname !== "/sign-up" ? (
        <div className="w-full flex">
          <div className="w-[290px] border-r border-red-600 h-screen overflow-y-scroll">
            <DashboardSideBar  />
          </div>
          {children}
        </div>
      ) : (
        <>{children}</> 
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
