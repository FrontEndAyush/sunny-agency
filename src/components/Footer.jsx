import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#90D4C5]">
      <h1 className="font-bold text-3xl text-center text-[#2E7666] py-10">
        sunnyside
      </h1>

      <ul className="flex justify-around lg:justify-center lg:gap-[60px] text-[18px] px-4 text-[#2E7666] ">
        <li className=" hover:text-white cursor-pointer duration-300 transition-all">
          About
        </li>
        <li className=" hover:text-white  cursor-pointer duration-300 transition-all">
          Services
        </li>
        <li className=" hover:text-white cursor-pointer duration-300 transition-all">
          Projects
        </li>
      </ul>

      <div className="flex justify-around lg:justify-center lg:gap-[30px] px-20 py-10 text-[#599E8E]">
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
