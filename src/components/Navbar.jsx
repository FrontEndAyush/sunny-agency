import React, { useState } from "react";

const Navbar = () => {
  let [isTrue, setIsTrue] = useState(false);
  return (
    <nav className="flex justify-between items-center  p-6 lg:p-12">
      <img src="/images/logo.svg" alt="" />
      <img
        src="/images/icon-hamburger.svg"
        onClick={() => setIsTrue((previous) => !previous)}
        className="lg:hidden"
        alt=""
      />

      {/* for lg screen tab  */}
      <div className="hidden lg:block">
        <ul className="lg:flex hidden   items-center gap-10  text-white ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Serivces</li>
          <li className="cursor-pointer">Projects</li>
          <li className="text-black border px-7 bg-white py-2  main-heading rounded-full hover:bg-[#6FCFFF] duration-300 transition-all  hover:text-white cursor-default">
            Contacts
          </li>
        </ul>
      </div>

      <h1 class={`w-0 h-0 border-b-[70px] absolute right-[30px] top-[60px] lg:hidden   border-b-white border-l-[70px] ${isTrue ? "block" : "hidden"}  border-l-transparent`}></h1>
      <div className={`absolute right-[30px] lg:hidden ${isTrue ? "block" : "hidden"} top-[100px] bg-white h-[300px] w-[300px]`}>
        <ul className="flex flex-col justify-center">
          <li className="cursor-pointer text-center mt-10">About</li>
          <li className="cursor-pointer text-center mt-5">Serivces</li>
          <li className="cursor-pointer text-center mt-5">Projects</li>
          <li className="text-black border px-7 mt-5 bg-[#FBD601] py-3  main-heading rounded-full hover:bg-[#6FCFFF] w-[120px] mx-auto duration-300 transition-all  hover:text-white cursor-default">
            Contacts
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
