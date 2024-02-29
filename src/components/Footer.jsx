import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <section className=" bg-[#212731] w-full font-inter">
        <div className="w-11/12 mx-auto ">
          <div className="h-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#FFFFFF]">
            <div className="w-full">
              <h1 className=" text-base uppercase ">Categories</h1>
              <ul className="flex flex-col gap-8 mt-5 text-sm text-[#B6BDC4]">
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
              </ul>
            </div>
            <div className=" mt-5 md:mt-0">
              <h1 className=" text-base uppercase">Contact</h1>
              <ul className="flex flex-col gap-8 mt-5 text-sm text-[#B6BDC4]">
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
              </ul>
            </div>
            <div className=" flex flex-row justify-center ">
              <div className="mt-20 text-[#D1D6DA] text-[12px]">
                <p className="flex gap-2 items-center cursor-pointer">
                  <span>United States</span>
                  <IoIosArrowDown size={15} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[110px]"></div>
      </section>
    </>
  );
};

export default Footer;
