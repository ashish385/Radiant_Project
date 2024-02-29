import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Header = () => {
  const [openDrwaer, setOpenDrwaer] = useState(false);
  return (
    <>
      <nav className="bg-[#212731]  ">
        <div className="w-11/12 mx-auto flex flex-row gap-2 justify-between md:justify-center items-center h-[64px]  text-[#D1D6DA] ">
          <ul className="w-[70%] mx auto flex justify-between">
            <li htmlFor="search" className=" relative  ">
              <CiSearch className=" absolute search_bar_icon text-gray-700 font-semibold  " />
              <input
                type="text"
                name=""
                id=""
                className=" outline-none py-[6px] pl-8 text-gray-500  rounded-lg"
              />
            </li>
            <li className="hover:text-white cursor-pointer hidden lg:block">
              Categories
            </li>
            <li className="hover:text-white cursor-pointer hidden lg:block">
              Website Builders
            </li>
            <li className="hover:text-white cursor-pointer hidden lg:block">
              Today's deals
            </li>
          </ul>
          <div
            className=" block lg:hidden text-2xl "
            onClick={() => setOpenDrwaer(!openDrwaer)}
          >
            <AiOutlineAlignLeft />
          </div>
        </div>
        {/* Responsive Navbar */}
        <div
          className={`${openDrwaer ? "block" : "hidden"} lg:hidden mt-4 pb-4`}
        >
          <ul className="flex flex-col space-y-2 text-[#D1D6DA]">
            <li>
              <span className="hover:text-white  px-3 py-2 rounded">
                Categories
              </span>
            </li>
            <li>
              <span className="hover:text-white  px-3 py-2 rounded">
                Website Builders
              </span>
            </li>
            <li>
              <span className="hover:text-white  px-3 py-2 rounded">
                Today's deals
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
