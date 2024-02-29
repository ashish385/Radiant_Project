import React from "react";
import image_1 from "../assets/image_1.png";
import { PiCaretDownLight } from "react-icons/pi";
import StarRating from "./StarRating";

const Card = ({ data }) => {
  return (
    <>
      <section className=" relative rounded-md grid grid-cols-1 lg:grid-cols-4 w-full h-fit  md:px-6 gap-8 text-base   font-inter text-[#4B5665]">
        {/* label */}
        {data.tag && (
          <div className=" absolute -top-4 -left-2 flex items-center gap-1 px-3 py-1 bg-[#FF7724] text-white rounded-r-lg">
            {data.icon}
            <p>{data.tag}</p>
          </div>
        )}

        {/* index */}
        <div className=" absolute top-10 left-2 lg:-left-6 border rounded-full flex justify-center w-8 h-8 items-center    ">
          <span>{data.index}</span>
        </div>
        {/* content */}
        <div className=" flex flex-col justify-center items-center ">
          <img
            src={data.product_image}
            alt=""
            className=" w-[141px] h-[105px] object-cover"
          />
          <p className="mt-3 text-sm text-[#626E79]">Builder 1</p>
        </div>
        <div className="lg:col-span-2 px-[2rem] py-4">
          <p>
            <span className=" font-bold">{data.builder_title}</span>
            {data.builder_description}
          </p>
          <h1 className=" font-bold py-2 text-[#2C384A]">Main highlights</h1>
          <div className="pl-5">
            <p>{data.builder_content}</p>
          </div>
          {/* show more */}
          <button className="my-2 flex gap-1 items-center text-[#1B88F4] ">
            <span>Show more</span>
            <PiCaretDownLight />
          </button>
        </div>
        <div className=" col-span-1  ">
          <div className="flex flex-col justify-between items-center h-full w-full">
            <StarRating
              rating={data.rating}
              status={data.rating_staus}
              total_star={data.rating_star}
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

export default Card;
