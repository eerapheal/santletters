import Link from "next/link";
import React from "react";
import FooterLogo from "./footerLogo";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:pr-0 bg-[#1a1818] text-white flex flex-col pt-10">
      <section className="">
        <div className="w-[100%] flex flex-col md:flex-row  pb-5 m-auto" >
          <div className="md:w-[50%] m-auto">
            <Link href={"/"}>
              <FooterLogo />
            </Link>
            <p className="text-2xl py-2  font-[400] text-center sm:text-left">
              Receive Santletters updates straight to your inbox.
            </p>
            <p className="text-xs font-[400] text-center sm:text-left">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
            <br />
            <div className="flex items-center w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-[0] outline-none"
              />
              <button className="!w-[120px] py-2 cursor-pointer rounded-r h-[43px] bg-blue-500 text-xl outline-none font-[500]">
                Yes, Ok
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%] m-auto py-5 md:py-0">
            <div className="flex items-center justify-around">
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Create</li>
                <li className="text-xl pb-4 cursor-pointer">Write</li>
                <li className="text-xl pb-4 cursor-pointer">Grow</li>
                <li className="text-xl pb-4 cursor-pointer">Monitize</li>
                <li className="text-xl pb-4 cursor-pointer">Analayze</li>
              </ul>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Features</li>
                <li className="text-xl pb-4 cursor-pointer">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer">Resources</li>
                <li className="text-xl pb-4 cursor-pointer">Doc</li>
                <li className="text-xl pb-4 cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-lg text-center font-[400] pb-10">
          © 2024 SantTech, Inc. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
