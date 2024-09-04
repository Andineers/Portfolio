import React from "react";
import heroimage from "../assets/img/profile.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-full md:h-[70vh] mx-auto py-8 bg-[#1A0529]">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[300px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5">
        <h1 className="text-white font-poppins text-2xl sm:text-xl mt-[100px] lg:text-8xl font-extrabold">
          <span className="primary-color font-poppins">I'm a</span>
          <br />
          <span className="primary-color font-poppins">
            <Typewriter
              words={["UI Designer", "Frontend Dev"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-white font-poppins sm:text-lg my-6 lg:text-xl">
          My name is Rizky Andini. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-pink-500 to-blue-300 text-white font-poppins"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-pink-500 to-blue-300 text-white hover:border-none font-poppins"
          >
            Contact
          </a>
        </div>

        <div className="flex text-white text-[20px] gap-5">
          <a
            href="https://github.com/Andineers"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ryxndini/"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
