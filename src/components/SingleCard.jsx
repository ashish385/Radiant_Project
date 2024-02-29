import React from "react";
import image_1 from "../assets/image_1.png";

const SingleCard = () => {
  return (
    <>
      <div className="flex flex-col w-full text-[#5C6874] ">
        <div className="flex justify-center items-center p-6">
          <img
            src={image_1}
            alt=""
            className=" object-cover w-[141px] h-[103px]"
          />
        </div>
        <section className="w-[80%] mx-auto">
          <div className="flex gap-2 text-sm text-[#074786] ">
            <div className=" px-2 py-1 bg-[#F2F4F7] rounded-md">20% off</div>
            <div className=" px-2 py-1 bg-[#F2F4F7] rounded-md">
              Limited Time
            </div>
          </div>
          <div className="py-4 font-bold text-center text-[#626E79] text-sm">
            Web Builder 1
          </div>
          <p className=" text-base font-inter text-[#626E79] ">
            Computer Modern clasic with wix support
          </p>
          <div className="flex gap-2 relative mt-2">
            <p className="text-xl">$39.96</p>
            <div className=" absolute left-[30%] md:left-[20%] -bottom-1 text-sm text-[#9FA9B3]">
              <span>$49.96</span>
              <span className="ml-2 text-[#EF4C5D]">(20% off)</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-xl border bg-[#1B88F4] mt-5 text-white">
            View Deal
          </button>
        </section>
      </div>
    </>
  );
};

export default SingleCard;
