import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`font-[var(--font-ovo)] text-center mb-2 text-lg `}>
        What I offer
      </h4>
      <h2 className={` font-[var(--font-ovo)] text-center text-5xl`}>
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]">
        I am Full Stack Web developer from delhi, India .As a beginner full
        stack developer with freelance experience
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <div
              key={index}
              className=" border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow-black)] cursor-pointer hover:bg-[var(--color-lightHover)] hover:-transalate-y-1 duration-500"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700">{title}</h3>
              <p className="text-lg my-4 text-gray-600 leading-5">
                {description}
              </p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more
                <Image src={assets.right_arrow} className="w-4" alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
