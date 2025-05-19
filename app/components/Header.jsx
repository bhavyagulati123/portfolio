import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Ovo } from "next/font/google";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="w-32" />
      </div>
      <h3
        className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className} `}
      >
        Hi! I'm Bhavya Gulati <Image src={assets.hand_icon} alt="" />
      </h3>
      <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>
        Full Stack Web developer based in delhi.
      </h1>
      <p className={`max-w-2xl mx-auto`}>
        I am Full Stack Web developer from delhi, India .As a beginner full
        stack developer with freelance experience
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me <Image src={assets.right_arrow_white} className="w-4" alt=""/>
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume <Image src={assets.download_icon} className="w-4" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
