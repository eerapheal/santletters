"use client";
import DashboardOverView from "@/src/shared/components/cards/dashboardOverView";
import SubscribersChart from "@/src/shared/components/chart/subscribersChart";
import { ICONS } from "@/src/shared/utils/icons";
import { Button } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { useState } from "react";

const Main = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="p-5 w-full bg-white">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hey {user?.fullName}
      </h1>
      <p className="opacity-[.7] text-sm">Here is how your Publication</p>
      <div className="w-full flex">
        <div className="w-[70%] min-h-[88vh]  pr-5">
          <DashboardOverView />
          <br />
          <SubscribersChart />
        </div>
        <div className="w-[30%] p-5">
          <div className="w-full flex justify-end">
            <Button className="bg-black text-white text-lg rounded !px-6">
              <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
              Start Writing
            </Button>
          </div>
          <br />
          {/* resources */}
          <div>
            <h5 className="text-xl font-medium">Resources</h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* home page url */}
              <div>
                <h4 className="font-medium">Home page</h4>
                <div
                  className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
                  onClick={handleCopyClick}
                >
                  <small
                    className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}
                  >
                    https://www.linkedin.com/in/ekpenisiraphael/
                  </small>
                  <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                    <span className="text-lg">{ICONS.copy}</span>
                    <span className="pl-1">copy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main; 
