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

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
export default function Home() {
  return (
    <>
    
        <Navbar />
        <Header />
        <About/>
        <Services/>
         <Work/>
         <Contact/>
         <Footer/>
    </>
  );
}
