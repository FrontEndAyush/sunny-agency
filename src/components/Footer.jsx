import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#90D4C5]">
      <h1 className="font-bold text-3xl text-center text-[#2E7666] py-10">
        sunnyside
      </h1>

      <ul className="flex justify-around text-[18px] px-4 text-[#2E7666] ">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>

      <div className="flex justify-around px-20 py-10 text-[#599E8E]">
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
