import React from "react";

const Logo = () => {
  return (
    <div className="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 100 100"
        className="mb-[20px]"
      >
        {/*wing  */}
        <path
          d="M50 60c10 0 20-10 20-20s-10-10-20-10-20 10-20 10 10 10 20 10z"
          fill="#2D78FF"
        />

        {/* eye */}
        <circle cx="60" cy="40" r="4" fill="#FFFFFF" />

        {/* beak  */}
        <path d="M50 45l5 5-5 5-5-5z" fill="#FFC300" />
      </svg>
      <h5 className="absolute right-[-45px] xl:right-[-35px] text-blue-600 font-medium text-2xl">
        santletters
      </h5>
    </div>
  );
};

export default Logo;
