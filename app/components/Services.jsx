import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 dark:text-white"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`font-[var(--font-ovo)] text-center mb-2 text-lg `}
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={` font-[var(--font-ovo)] text-center text-5xl`}
      >
        My Services
      </motion.h2>
      <motion.p 
       initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]">
        I am Full Stack Web developer from delhi, India .As a beginner full
        stack developer with freelance experience
      </motion.p>
      <motion.div
       initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <motion.div
             whileHover={{scale:1.05}}
              key={index}
              className=" border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[var(--color-lightHover)] hover:-transalate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white ">
                {title}
              </h3>
              <p className="text-lg my-4 text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more
                <Image src={assets.right_arrow} className="w-4" alt="" />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
