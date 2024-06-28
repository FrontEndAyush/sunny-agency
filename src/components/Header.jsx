import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl text-white tracking-widest main-heading font-bold">
          WE ARE
        </h1>
        <h1 className="text-3xl tracking-widest text-white main-heading font-bold">
          CREATIVES
        </h1>
      </div>
      <div className="flex justify-center mt-12">
        <img src="/images/icon-arrow-down.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
