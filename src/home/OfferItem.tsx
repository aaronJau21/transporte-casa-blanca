"use client";

import { motion, Variants } from "motion/react";

interface Props {
  icon: JSX.Element;
  title: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const OfferItem = ({ icon, title }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      // animate={{ x: 100 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <div className="mt-14">
          {icon}
          <div className="mt-5 lg:w-80">
            <p className="text-2xl font-black">{title}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
