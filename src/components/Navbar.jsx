import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-12">
      <img src="/images/logo.svg" alt="" />
      <img src="/images/icon-hamburger.svg" className="lg:hidden" alt="" />

      <div>
      <ul className="lg:flex hidden  items-center gap-10 text-white ">
        <li>About</li>
        <li>Serivces</li>
        <li>Projects</li>
        <li className="text-black border px-7 bg-white py-2  main-heading rounded-full">Contacts</li>
      </ul>
   
      </div>
      
      
    </nav>
  );
};

export default Navbar;
