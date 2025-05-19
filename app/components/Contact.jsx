import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
const Contact = () => {
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
    <div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]`}
    >
      <h4 className={`font-[var(--font-ovo)] text-center mb-2 text-lg `}>
        Connect with me
      </h4>
      <h2 className={` font-[var(--font-ovo)] text-center text-5xl`}>
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-[var(--font-ovo)]">
        I'd love to hear from you !If you jabe any question ,comments, or
        feedback,please use the form below.
      </p>
      <form className="max-w-2xl mx-auto" action="" onSubmit={onSubmit}>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
            id=""
            placeholder="Enter your Email"
            required
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          id=""
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} className="w-5" alt="" />{" "}
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
