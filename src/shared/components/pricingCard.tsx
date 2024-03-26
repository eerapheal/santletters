import { GrowPlan, freePlan, scalePlan } from "@/src/app/config/constants";
import { ICONS } from "@/src/shared/utils/icons";
import { Button } from "@nextui-org/button";

const PricingCard = ({ active }: { active: string }) => {
  return (
    <div className="w-full flex flex-wrap items-start justify-around py-8">
      {/* free plan */}
      <div className="md:w-[400px] h-[525px] bg-white rounded p-5 my-5 lg:my-0">
        <div className="flex items-center justify-between pb-2 border-b border-[#000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="33"
            fill="string"
            className="mb-4"
          >
            <path
              fill="#8bf5b7"
              stroke="#f7b6da"
              strokeWidth="3"
              d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
            ></path>
          </svg>
          <h5 className="font-[500] uppercase text-cyber-ink text-3xl">Free</h5>
        </div>
        <div className="border-b py-2 border-[#000]">
          <h5 className="font-[400] uppercase text-cyber-ink text-3xl">$0</h5>
          <p className="text-lg font-[400]">No payment</p>
        </div>
        <div className="pt-2">
          <p className="text-xl font-[400]">It Includes</p>
        </div>
        {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-1">
            <span className="text-xl text-green-700">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button color="primary" className="w-full text-xl !py-6 font-[500]">
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] font-[400] text-center">
          30-day free trial of GOLD features, then free forever
        </p>
      </div>

      {/* Silver plan */}
      <div className="md:w-[400px] h-[525px] bg-white rounded p-5 my-5 lg:my-0">
        <div className="flex items-center justify-between pb-2 border-b border-[#000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="33"
            fill="string"
            className="mb-4"
          >
            <path
              fill="#f8f3c8"
              stroke="#f7b6da"
              strokeWidth="3"
              d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
            ></path>
          </svg>
          <h5 className="font-[500] uppercase text-cyber-ink text-3xl">
            Silver
          </h5>
        </div>
        <div className="border-b py-2 border-black">
          <h5 className="font-[400] uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "42" : "32"} per month
          </h5>
          <p className="text-lg font-[400]">Billed {active}</p>
        </div>
        <div className="pt-2">
          <p className="text-xl font-[400]">Included in Free, plus...</p>
        </div>
        {GrowPlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-1">
            <span className="text-xl text-green-700">{ICONS.right}</span>
            <p className="pl-2 text-lg font-[400]">{i.title}</p>
          </div>
        ))}
        <br />
        <Button color="primary" className="w-full text-xl !py-6 font-[500]">
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] font-[400] text-center">
          30-day free trial of GOLD features, then $
          {active === "Monthly" ? "42" : "32"}/mo
        </p>
      </div>

      {/* gold plan */}
      <div className="md:w-[400px] h-[525px] bg-white rounded p-5 my-5 lg:my-0">
        <div className="flex items-center justify-between pb-2 border-b border-[#000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="33"
            fill="string"
            className="mb-4"
          >
            <path
              fill="#a5971b"
              stroke="#f7b6da"
              strokeWidth="3"
              d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
            ></path>
          </svg>
          <h5 className="font-[500] uppercase text-cyber-ink text-3xl">Gold</h5>
        </div>

        <div className="border-b py-2 border-[#000]">
          <h5 className="font-[400] uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "89" : "74"} per month
          </h5>
          <p className="text-lg font-[400]">Billed {active}</p>
        </div>
        <div className="pt-2">
          <p className="text-xl font-[400]">Included in Silver plan, plus...</p>
        </div>
        {scalePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-1">
            <span className="text-xl text-green-700">{ICONS.right}</span>
            <p className="pl-2 text-lg font-[400]">{i.title}</p>
          </div>
        ))}
        <br />
        <Button color="primary" className="w-full text-xl !py-6 font-[500]">
          Get Started
        </Button>
        <p className="pt-1 opacity-[.7] text-center font-[400]">
          30-day free trial of GOLD features, then $
          {active === "Monthly" ? "89" : "74"}/mo
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
