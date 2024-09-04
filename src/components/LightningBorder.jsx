import React from 'react';
import { motion } from 'framer-motion';

const LightningBorder = ({ children }) => {
  return (
    <motion.div
      className="relative p-2 border-2 bg-black text-gray-400 max-w-2xl mx-auto mt-10"
      style={{ borderImage: 'url(lightning.png) 30 stretch' }}
      animate={{
        borderColor: ['#f0f', '#ff0', '#0ff', '#f0f'],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.div>
  );
};

export default LightningBorder;
