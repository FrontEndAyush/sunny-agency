import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl lg:text-4xl lg:mt-[40px] text-white lg:font-black tracking-widest main-heading font-bold">
          WE ARE <span className="lg:inline hidden main-heading">CREATIVES</span>
        </h1>
        <h1 className="text-3xl lg:hidden tracking-widest text-white main-heading font-bold">
          CREATIVES
        </h1>
      </div>
      <div className="flex justify-center mt-6 lg:mt-[130px]">
        <img src="/images/icon-arrow-down.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
