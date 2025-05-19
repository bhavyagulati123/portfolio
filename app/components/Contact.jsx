import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
const Contact = ({ isdarkmode, setIsdarkmode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6a6b24b2-65ae-4b82-9c60-449af91dfdb3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none `}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`font-[var(--font-ovo)] text-center mb-2 text-lg `}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={` font-[var(--font-ovo)] text-center text-5xl`}
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]"
      >
        I'd love to hear from you !If you jabe any question ,comments, or
        feedback,please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        action=""
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="dark:placeholder:text-gray-600 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            className=" dark:placeholder:text-gray-600 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
            id=""
            placeholder="Enter your Email"
            required
          />
        </div>
        <motion.textarea
        initial={{ y:100,opacity: 0 }}
      whileInView={{ y:0,opacity: 1 }}
      transition={{delay:1.3,duration: 0.6 }}
          className="dark:placeholder:text-gray-600 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          id=""
          rows="6"
          placeholder="Enter your message"
          required
        ></motion.textarea>
        <motion.button
        whileHover={{scale:1.5}}
        transition={{duration:0.3}}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto dark:border-2 hover:bg-black duration-500 dark:bg-transparent dark:border-gray-500 dark:hover:bg-darkHover"
          type="submit"
        >
          Submit now
          <Image
            src={isdarkmode ? assets.right_arrow : assets.right_arrow_white}
            className="w-5"
            alt=""
          />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
