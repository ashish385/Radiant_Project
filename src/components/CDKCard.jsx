import React from "react";
import image_1 from "../assets/image_1.png";
import { PiCaretDownLight } from "react-icons/pi";
import StarRating from "./StarRating";
// import { HiOutlineTrophy } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

const CDKCard = () => {
  return (
    <>
      <section className=" relative rounded-md grid grid-cols-1 lg:grid-cols-4 w-full  md:px-6 h-fit gap-8 text-base   font-inter text-[#4B5665]">
        {/* label */}
        {/* <div className=" absolute -top-4 -left-2 flex items-center gap-1 px-3 py-1 bg-[#FF7724] text-white rounded-r-lg">
          <HiOutlineTrophy />
          <p>Best Choice</p>
        </div> */}

        {/* index */}
        <div className=" absolute top-10 left-2 lg:-left-6 border rounded-full flex justify-center w-8 h-8 items-center    ">
          <span>4</span>
        </div>
        {/* content */}
        <div className=" flex flex-col justify-center items-center ">
          <img src={image_1} alt="" className=" object-cover" />
          <p className="mt-3 text-sm text-[#626E79]">CDK</p>
        </div>
        <div className="lg:col-span-2 relative px-[2rem] py-4">
          <p>
            <span className=" font-bold">
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          {/* tag off */}
          <p className="text-[#074786] my-2 py-2 text-sm bg-[#F2F4F7] w-fit rounded-md px-2">
            26% off
          </p>
          {/* main hilight */}
          <h1 className=" font-bold py-2 text-[#2C384A]">Main highlights</h1>
          <div className="pl-5">
            <div className=" rounded-md w-full bg-[#FFF4ED] py-5 flex flex-col justify-center gap-y-3 pl-3">
              <div className="flex flex-row gap-2">
                <p className="text-[#1B88F4] bg-[#FFFFFF] px-3 py-1 rounded-md text-[18px]">
                  9.9
                </p>
                <p className=" capitalize text-start mt-1">
                  building responsive
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-[#1B88F4] bg-[#FFFFFF] px-3 py-1 rounded-md text-[18px]">
                  8.9
                </p>
                <p className=" capitalize text-start mt-1">cool</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-[#1B88F4] bg-[#FFFFFF] px-3 py-1 rounded-md text-[18px]">
                  8.9
                </p>
                <p className=" capitalize text-start mt-1">Docs</p>
              </div>
            </div>
          </div>
          <p>Why we love it</p>
          <div className=" flex gap-3 py-1">
            <div className=" text-sm w-5 h-5 rounded-full flex justify-center items-center bg-[#1B88F4] bg-opacity-10 text-[#074786]">
              <IoMdCheckmark />
            </div>
            <p>Documentation</p>
          </div>
          <div className=" flex gap-3 py-1">
            <div className=" text-sm w-5 h-5 rounded-full flex justify-center items-center bg-[#1B88F4] bg-opacity-10 text-[#074786]">
              <IoMdCheckmark />
            </div>
            <p>Easy Use</p>
          </div>
          <div className=" flex gap-3 py-1">
            <div className=" text-sm w-5 h-5 rounded-full flex justify-center items-center bg-[#1B88F4] bg-opacity-10 text-[#074786]">
              <IoMdCheckmark />
            </div>
            <p>Out of box</p>
          </div>
          {/* show more */}
          <button className="my-2 lg:absolute -bottom-5 -left-4  flex gap-1 items-center text-[#1B88F4] ">
            <span>Show more</span>
            <PiCaretDownLight />
          </button>
        </div>
        <div className=" col-span-1  ">
          <div className="flex flex-col justify-between items-center h-full w-full">
            <StarRating
              rating={9.1}
              status={"Very Good"}
              total_star={4}
            />

            <div className="pb-6 w-full ">
              <button className="w-full py-3 rounded-xl border bg-[#1B88F4] text-white">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CDKCard;
