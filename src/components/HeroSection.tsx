import React from "react";
import DefaultWidth from "./tools/DefaultWidth";
import HeroImage from "../assets/images/HeroImage.png";

const HeroSection = () => {
  return (
    <>
      <section className="h-[90vh] overflow-hidden bg-primary-100">
        <DefaultWidth>
          <div className="flex justify-between">
            <div className="flex flex-col gap-6 pt-[9.375rem]">
              <p className="p-3 bg-[#434B4D] w-fit font-jost rounded-sm">
                Welcome to our Firm
              </p>
              <p className="font-jost font-bold w-[37.5rem] shrink-0 text-7xl text-white">
                Consulting For Every Business
              </p>
              <div className="mt-10 py-3 px-5 bg-[#3C72FC] hover:scale-110 duration-300 cursor-pointer w-fit">
                Discover More
              </div>
            </div>
            <div className="mt-5 overflow-hidden">
              <img src={HeroImage} className="w-[600px]" alt="" />
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="bg-[#0F0D1D] h-[90vh]">
        <DefaultWidth>
          <div>
            <h2>
                REAL-WORLD EXPERIENCE
            </h2>
            <p>
            The best business consulting firm you can count on!
            </p>
            <div>
                
            </div>
          </div>
        </DefaultWidth>
      </section>
    </>
  );
};

export default HeroSection;
