import React, { useState } from "react";
import ReactStars from "react-rating-star-with-type";
import { IoInformationCircleOutline } from "react-icons/io5";

const StarRating = ({ rating, status, total_star }) => {
  const [star, setStar] = useState(total_star);
  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <>
      <div className=" relative w-[135px] h-[118px] bg-[#F3F9FF] py-5 text-center mb-10 lg:mb-0 flex flex-col gap-5 rounded-b-xl px-4 ">
        <div className=" absolute top-1 right-5 text-[#074786] text-sm opacity-50">
          <IoInformationCircleOutline />
        </div>
        <h1 className=" text-4xl font-inter text-[#074786]">{rating}</h1>
        <div>
          <p className=" text-[14px] font-inter text-[#074786] font-[400]">
            {status}
          </p>
          <div className=" w-full flex justify-center mt-3">
            <ReactStars
              onChange={onChange}
              size={12}
              value={star}
              isEdit={true}
              activeColors={["red", "orange", "#FFCE00", "#FFB80F", "#FFB80F"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StarRating;
