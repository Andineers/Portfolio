import React from "react";
import { motion } from "framer-motion";
import uiDesigner from "../assets/img/uiDesigner.png";
import frontendImg from "../assets/img/frontendImg.png";

const Skills = () => {
  return (
    <section className="skills py-24 px-4 bg-[#1A0529] text-white" id="skills">
      <h2 className="text-4xl font-bold ml-[700px] mb-14 primary-color font-poppins">
        Skills
      </h2>
      <p className="text-center text-xl mb-12 text-gray-400 font-poppins">
        What Can I Do Best?
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <SkillCard
          icon={
            <img
              src={uiDesigner}
              alt="uiDesigner Icon"
              className="w-12 h-12 mx-auto mb-4 bg-white font-poppins p-2 rounded-full"
            />
          }
          title="UI Designer"
          description="lorem"
        />
        <SkillCard
          icon={
            <img
              src={frontendImg}
              alt="frontend Icon"
              className="w-12 font-poppins h-12 mx-auto mb-4 bg-white p-2 rounded-full"
            />
          }
          title="Frontend Developer"
          description="lorem."
        />
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Skills;
