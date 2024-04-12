import React from "react";

const SideBarFooterLogo = () => {
  return (
    <div className="flex items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 100 100"
        className="mb-5"
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
      <h5 className="absolute text-blue-700 font-medium text-4xl">
        Santletters
      </h5>
    </div>
  );
};

export default SideBarFooterLogo;
