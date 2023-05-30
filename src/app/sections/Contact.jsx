"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../assets/img/profile.png";
import check from "../assets/check-no-circle.svg";

const Contact = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    setIsCheckboxChecked(false);
  }, []);

  return (
    <section
      id="contact"
      className="relative z-10 text-[#F2F2F2] flex flex-col h-screen p-5 md:p-10 "
    >
      <h2 className="mt-10 text-4xl tracking-[20px] font-nunitoXLight">
        Contact
      </h2>
      <form action="/" method="post" className="w-full md:w-[40%] my-10">
        <div className="flex flex-col mb-5">
          <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2 "
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            name="email"
            className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2 "
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="4"
            className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2"
          />
        </div>
      </form>
      <div className="flex flex-col">
        <div className="flex">
          <div
            className="relative flex justify-center items-center"
            onClick={(e) => setIsCheckboxChecked(!isCheckboxChecked)}
          >
            <div className="">
              <div className="h-4 w-4 border-[1px] rounded-sm cursor-pointer mr-2 border-[#f2f2f2b6]"></div>
            </div>
            <Image
              src={check}
              alt="check"
              className={
                isCheckboxChecked
                  ? "mr-1 h-[6px] left-[3px] cursor-pointer absolute select-none"
                  : "hidden"
              }
            />
          </div>
          <p>Privacy policy</p>
        </div>
        <p className="text-sm font-nunitoXLight">
          I have read and agree to the
          <a href="#privacy" className="font-nunitoBold">
            {" "}
            Privacy Policy.
          </a>
        </p>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 w-[300px] sm:w-[210px] md:w-[400px]  xl:w-[600px]">
        <Image height={1524} width={1524} src={profile} alt="adam" />
      </div>
    </section>
  );
};

export default Contact;
