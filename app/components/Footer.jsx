import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = ({isdarkmode,setIsdarkmode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isdarkmode?assets.logo_dark: assets.logo} alt="" className="w-36 mx-auto mb-2 dark:w-40" />
        <div className="w-max flex items-center gap-2 mx-auto font-[var(--font-ovo)] ">
          <Image src={isdarkmode?assets.mail_icon_dark: assets.mail_icon} alt="" className="w-6 bold " />
          bhavyagulati651@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>©️ 2025 Bhavya Gulati. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
            <li><a target="_blank" href="https://github.com/bhavyagulati123">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/bhavya-gulati-9434b71b4/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
