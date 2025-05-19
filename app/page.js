'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Ovo } from "next/font/google";
import { useEffect, useState } from "react";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
export default function Home() {
  const [isdarkmode, setIsdarkmode] = useState(false);
  useEffect(()=>{
    if(localStorage.theme=='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsdarkmode(true);
    }
    else{
      setIsdarkmode(false);
    }
  },[]);
useEffect(() => {
  if (isdarkmode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }
}, [isdarkmode]);
  return (
    <>
        <Navbar isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode} />
        <Header isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        <About isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        <Services isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        <Work isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        <Contact isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        <Footer isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
    </>
  );
}
