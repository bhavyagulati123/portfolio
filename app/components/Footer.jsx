import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2 " />
        <div className="w-max flex items-center gap-2 mx-auto font-[var(--font-ovo)] ">
          <Image src={assets.mail_icon} alt="" className="w-6 bold " />
          bhavyagulati651@gmail.com
        </div>
      </div>

      <div>
        <p>©️ 2025 Bhavya Gulati. All rights reserved.</p>
        <ul>
            <li><a href="">Github</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
