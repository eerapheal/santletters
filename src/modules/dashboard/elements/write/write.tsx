"use client";
import { ICONS } from "@/src/shared/utils/icons";
import { useState } from "react";
import { Button } from "@nextui-org/react";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState(" ");
  const [open, setOpen] = useState(false);

  const handleCreate = () => {}

  return (
    <div className="w-full p-5 flex-wrap gap-6 relative">
      <div
        className="w-[200px] h-200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-3">
          <h5 className="text-2xl">Create New</h5>
        </span>
      </div>
      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
          <div className="w-[600px] p-5 bg-white rounded shadow relative">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>
            <h5>Enter your Email subject</h5>
            <input
              type="text"
              name=""
              id=""
              className="border w-full my-2 h-[35px] px-2 outline-none"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
            />
            <Button
              color="primary"
              className="rounded text-xl mt-3"
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;
