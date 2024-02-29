import React from "react";
import {
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { PiCaretDownLight } from "react-icons/pi";

const categories = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];

const Topbar = () => {
  return (
    <div>
      <h1 className=" text-2xl md:text-4xl lg:text-[3.5rem] pb-2">
        Best Website builders in the US
      </h1>
      <section className="w-full flex flex-row justify-between border-t border-b mt-5 py-4 text-sm text-[#4B5665]">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex gap-1 items-center ">
            <IoCheckmarkCircleOutline size={20} />
            <span>Last Updated - February 22, 2020</span>
          </div>
          <div className="flex gap-1 items-center">
            <IoInformationCircleOutline size={20} />
            <span>Advertising Disclosure</span>
          </div>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <p>Top Relevant</p>
          <PiCaretDownLight size={20} />
        </div>
      </section>

      {/* categories */}
      <section className="w-full flex items-center pl-2 py-4 text-[#4B5665] overflow-hidden">
        <ul className="flex flex-wrap justify-between gap-3 lg:gap-[6rem] ">
          {categories.map((item, index) => (
            <li key={index} className="flex cursor-pointer">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* page information */}
      <section className="  text-[#5C6874] gap-3">
        <span className=" hover:underline cursor-pointer">Home</span>{" "}
        <span className=" font-bold pl-1 ">{">"}</span>
        <span className=" hover:underline cursor-pointer pl-1 ">
          Hosting for all
        </span>{" "}
        <span className=" font-bold pl-1 ">{">"}</span>
        <span className=" hover:underline cursor-pointer pl-1 ">
          Hosting
        </span>{" "}
        <span className=" font-bold pl-1 ">{">"}</span>
        <span className=" hover:underline cursor-pointer pl-1 ">
          Hosting6
        </span>{" "}
        <span className=" font-bold pl-1 ">{">"}</span>
        <span className=" hover:underline cursor-pointer pl-1 ">Hosting5</span>
      </section>
    </div>
  );
};

export default Topbar;
