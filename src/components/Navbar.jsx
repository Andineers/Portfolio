import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#1A0529] fixed w-full top-0 left-0 h-[100px] flex justify-between items-center z-50">
      <h1 className="text-3xl font-bold  font-poppins text-yellow-100 ml-[80px]">
        R. Andini
      </h1>
      <ul className="hidden md:flex font-poppins text-white mr-[100px]">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#about">Skills</a>
        </li>
        <li className="p-5">
          <a href="#skills">Tech</a>
        </li>
        <li className="p-5">
          <a href="#projects">Project</a>
        </li>
        <li className="p-5">
          <a href="#experiences">Experiences</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6 bg-transparent">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#2e0948] ease-in-out duration-500 z-40"
            : "fixed left-[-100%] h-full top-0 w-[60%] bg-[#212021] ease-in-out duration-500 z-40"
        }
      >
        <h1 className="text-3xl font-poppins text-yellow-200 m-4">R.Andini</h1>
        <ul className="p-8 text-2xl font-poppins text-white">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
          <a href="#about">Skills</a>
        </li>
          <li className="p-2">
            <a href="#skills">Tech</a>
          </li>
          <li className="p-2">
            <a href="#projects">Project</a>
          </li>
          <li className="p-2">
            <a href="#experiences">Experiences</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
