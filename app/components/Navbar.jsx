import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Ovo } from "next/font/google";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
import { assets } from "@/assets/assets";

const Navbar = () => {
  const sidemenuref = useRef();
  const [isscroll, setIsscroll] = useState(false);
  const openMenu = () => {
    sidemenuref.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sidemenuref.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsscroll(true);
      } else {
        setIsscroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className=" w-full " />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50   ${
          isscroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image src={assets.logo} className="w-32 cursor-pointer" alt="" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isscroll?"":"bg-white shadow-sm opacity-75"}`} >
          <li className={`${ovo.className}`}>
            <a className="font-ovo cursor-pointer" href="#top">
              Home
            </a>
          </li>
          <li className={`${ovo.className}`}>
            <a className="font-Ovo cursor-pointer" href="#about">
              About Me
            </a>
          </li>
          <li className={`${ovo.className}`}>
            <a className="cursor-pointer" href="#services">
              Services
            </a>
          </li>
          <li className={`${ovo.className}`}>
            <a className="cursor-pointer" href="#mywork">
              My Work
            </a>
          </li>
          <li className={`${ovo.className}`}>
            <a className={`cursor-pointer`} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex gap-4 items-center  ">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className={` ${ovo.className} hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 `}
          >
            Contact
            <Image src={assets.arrow_icon} className="w-4 " alt="" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sidemenuref}
          className="flex md:hidden flex-col gap-4  py-20 px-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li onClick={closeMenu} className={`${ovo.className}`}>
            <a className="font-ovo cursor-pointer" href="#top">
              Home
            </a>
          </li>
          <li onClick={closeMenu} className={`${ovo.className}`}>
            <a className="font-Ovo cursor-pointer" href="#About_me">
              About Me
            </a>
          </li>
          <li onClick={closeMenu} className={`${ovo.className}`}>
            <a className="cursor-pointer" href="#Services">
              Services
            </a>
          </li>
          <li onClick={closeMenu} className={`${ovo.className}`}>
            <a className="cursor-pointer" href="#My_Work">
              My Work
            </a>
          </li>
          <li onClick={closeMenu} className={`${ovo.className}`}>
            <a className={`cursor-pointer`} href="#Contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
