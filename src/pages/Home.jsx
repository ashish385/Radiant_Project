import React from "react";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import CDKCard from "../components/CDKCard";
import SingleCard from "../components/SingleCard";
import { BuilderData } from "../data/data";

const Home = () => {
  return (
    <>
      <section className="w-11/12 mx-auto pt-5">
        <Topbar />
        <div className="mt-5 py-3 w-full flex flex-col gap-5 ">
          {BuilderData.map((data, index) => (
            <Card key={index} data={data} />
          ))}

          {/* cdk card */}
          <CDKCard />
          <div className=" mt-5 text-[#2C384A] pl-3">
            <p className=" text-[36px]">Related deals you might like for</p>
          </div>
          {/* slider Card */}
          <div className=" mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </div>
          <div className="h-[50px]"></div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between items-center lg:ml-6">
          <div className="lg:pl-6 w-full lg:w-[600px] text-[32px] text-[#5C6874]">
            Sign up and get exclusive special deals
          </div>
          <div className="flex mt-5 lg:mt-0  justify-end w-full ">
            <button className="w-fit px-6 py-2 bg-[#1B88F4] text-white rounded-r-xl">
              Sign Up
            </button>
          </div>
        </div>
        <div className="h-[50px]"></div>
      </section>
    </>
  );
};

export default Home;
