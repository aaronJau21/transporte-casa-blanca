"use client";

import { motion, Variants } from "motion/react";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
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

export const Items = ({ description, icon, title }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      // animate={{ x: 100 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <div className="flex justify-center mb-5">{icon}</div>
            <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
