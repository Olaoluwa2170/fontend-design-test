import { Progress } from "@/components/ui/progress";
import Faq from "./Faq";
import Testimony from "./Testitmony";
import DefaultWidth from "./tools/DefaultWidth";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Body = () => {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  return (
    <>
      <section className="overflow-hidden relative pb-[15rem] md:pb-[6.25rem]">
        <img
          src="Path 8.png"
          className="-translate-y-64 -top-10 right-0 absolute hidden md:block "
          alt=""
        />
        <DefaultWidth className="max-w-[80vw] ">
          <div className="flex md:flex-row flex-col py-[100px] justify-between items-center">
            <div>
              <img src="./market.png" alt="word" className="w-[600px]" />
            </div>
            <div>
              <p className="max-w-[29.6875rem] font-bold text-4xl mt-10 md:mt-0 md:text-5xl text-primary-tdefault">
                We’re leading in the market
              </p>
              <p className="max-w-[34.125rem] space-y-7 mt-5 md:mt-10">
                <span className="md:text-lg text-sm leading-[1.5rem] font-light text-primary-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto eius quisquam expedita fugiat inventore! Ducimus
                  reiciendis itaque aperiam minus! Dolorem?
                </span>
                <span className="text-primary-t200 text-lg md:text-2xl block">
                  We have 35+ years of experience. We offer marketing and
                  consulting services
                </span>
              </p>
              <div className="relative mt-8">
                <Progress value={88} />
                <p className="md:text-[0.875rem] text-xs absolute top-2 md:top-3 leading-[1.25rem] font-bold">
                  CONSULTING
                </p>
              </div>
              <div className="relative mt-8">
                <Progress value={68} />
                <p className="text-xs md:text-[0.875rem] absolute top-2 md:top-3 leading-[1.25rem] font-bold">
                  ADVICES
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <div className="md:w-[4.375rem] w-[50px] flex justify-center bg-[#EBF1FF] items-center md:h-[4.375rem] h-[50px]">
                  <img src="./phone-call.png" alt="phone" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary-100 text-sm md:text-lg font-light">
                    Have any question? Give us a call
                  </p>
                  <p className="text-[#0F0D1D] text-xs md:text-sm leading-[26px]">
                    +92 666 888 0000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="bg-[#F2F4F8] md:h-[120vh] pb-[3.125rem] md:pb-0 flex flex-col items-center">
        <div className="flex md:flex-row flex-col -translate-y-[15.625rem] md:-translate-y-[6.25rem]">
          <div className="gap-8 w-[23rem] md:w-[39.125rem] shadow-2xl bg-white md:p-0 p-10 md:h-[222px] flex md:flex-row flex-col items-center justify-center rounded">
            <div className="md:w-[4.375rem] w-[50px] flex justify-center bg-[#EBF1FF] items-center md:h-[4.375rem] h-[50px]">
              <p className="text-xl font-semibold text-primary-t200">01</p>
            </div>
            <div className="md:space-y-4">
              <p className="md:text-[1.25rem] leading-[1.625rem] font-bold">
                GET PROFESSIONAL ADVICE
              </p>
              <p className="text-base text-primary-100 max-w-[15rem] text-center md:text-left  md:max-w-[20.3125rem]">
                There are many variations of available but the majority have
                suffered alteration.
              </p>
            </div>
          </div>

          <div className="gap-8 w-[23rem] md:w-[39.125rem] shadow-2xl md:-translate-y-0 -translate-y-1  md:-translate-x-3 bg-white md:p-0 p-10 md:h-[222px] flex md:flex-row flex-col items-center justify-center rounded">
            <div className="md:w-[4.375rem] w-[50px] flex justify-center bg-[#EBF1FF] items-center md:h-[4.375rem] h-[50px]">
              <p className="text-xl font-semibold text-primary-t200">02</p>
            </div>
            <div className="space-y-4">
              <p className="md:text-[1.25rem] leading-[1.625rem] font-bold">
                TRUSTED & PROFESSIONAL
              </p>
              <p className="text-base text-primary-100  max-w-[15rem]  text-center md:text-left md:max-w-[20.3125rem]">
                There are many variations of available but themajority have
                suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <DefaultWidth className="md:mt-5 -translate-y-32 md:-translate-y-0">
          <p className="text-4xl font-bold text-primary-tdefault text-center md:text-5xl">
            NEW CASE STUDIES
          </p>
          <p className="text-lg text-primary-100 text-center mt-2">
            We help our clients renew their business
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
            <div className="w-[290px] bg-primary-100 flex items-end p-5 md:h-[25.625rem] h-[15.625rem]">
              <div>
              <img src="./automobile.png" className="pb-2" alt="" />
                <p className="text-gray-50 text-xl font-bold">
                  Thought leadership
                </p>
                <p className="text-gray-50 text-lg font-bold ">
                  businesses growth
                </p>
              </div>
            </div>
            <div className="w-[290px] bg-primary-100 flex items-end p-5 md:h-[25.625rem] h-[15.625rem]">
              <div>
                <img src="./automobile.png" className="pb-2" alt="" />
                <p className="text-gray-50 text-xl font-bold">
                  Thought leadership
                </p>
                <p className="text-gray-50 text-lg font-bold ">
                  businesses growth
                </p>
              </div>
            </div>
            <div className="w-[290px] bg-primary-100 flex items-end p-5 md:h-[25.625rem] h-[15.625rem]">
              <div>
              <img src="./automobile.png" className="pb-2" alt="" />
              <p className="text-gray-50 text-xl font-bold">
                  Thought leadership
                </p>
                <p className="text-gray-50 text-lg font-bold ">
                  businesses growth
                </p>
              </div>
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="bg-[#4b4a56]">
        <div className="max-w-[602px] mx-auto flex flex-col  justify-center items-center space-y-10 bg py-[6.25rem]">
          <p className="text-center text-white font-bold text-4xl md:text-5xl">
            MISSION IS TO PROTECT YOUR BUSINESSES & MUCH MORE
          </p>
          <div className="mt-10 py-3 px-5 bg-[#3C72FC] hover:scale-110 duration-300 cursor-pointer w-fit">
            Discover More
          </div>
        </div>
      </section>
      <Faq />
      <section className="bg-[#f2f4f8] py-[70px] md:py-[100px]">
        <Testimony />
      </section>
      <section className="bg-[#0c1731] pt-[100px] pb-[200px]">
        <DefaultWidth>
          <div className="grid grid-cols-2  space-y-5 md:space-y-0 md:grid-cols-4 ">
            <div className="text-white flex flex-col mt-5 md:mt-0 items-center space-y-2 w-full justify-center">
              <div className="w-[110px] h-[110px] bg-black flex justify-center items-center">
                <img
                  src="./brainstorming.png"
                  className="w-[62px] h-[62px]"
                  alt=""
                />
              </div>
              <p className="font-bold text-center text-2xl">420</p>
              <p className="text-sm font-bold text-center">
                CONSULTANT SOLUTIONS
              </p>
            </div>
            <div className="text-white flex flex-col items-center space-y-2 w-full border-l-primary-100 md:border-r-primary-100 border-l md:border-r justify-center">
              <div className="w-[110px] h-[110px] bg-black flex justify-center items-center">
                <img
                  src="./brainstorming.png"
                  className="w-[62px] h-[62px]"
                  alt=""
                />
              </div>
              <p className="font-bold text-center text-2xl">420</p>
              <p className="text-sm font-bold text-center">
                CONSULTANT SOLUTIONS
              </p>
            </div>
            <div className="text-white flex flex-col items-center space-y-2 w-full  border-r-primary-100 border-r justify-center">
              <div className="w-[110px] h-[110px] bg-black flex justify-center items-center">
                <img
                  src="./brainstorming.png"
                  className="w-[62px] h-[62px]"
                  alt=""
                />
              </div>
              <p className="font-bold text-center text-2xl">420</p>
              <p className="text-sm font-bold text-center">
                CONSULTANT SOLUTIONS
              </p>
            </div>
            <div className="text-white flex flex-col items-center space-y-2 w-full  justify-center">
              <div className="w-[110px] h-[110px] bg-black flex justify-center items-center">
                <img
                  src="./brainstorming.png"
                  className="w-[62px] h-[62px]"
                  alt=""
                />
              </div>
              <p className="font-bold text-center text-2xl">420</p>
              <p className="text-sm font-bold text-center">
                CUSTUMER SOLUTIONS
              </p>
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="md:h-[90vh] pb-8">
        <div className="flex md:flex-row flex-col justify-center items-center gap-2 -translate-y-[5.625rem] md:-translate-y-[4.5rem]">
          <div
            onClick={() => {
              setfirst(true);
              setsecond(false);
              setthird(false);
            }}
            className={cn(
              "md:w-[450px] w-[260px] rounded cursor-pointer h-[50px] md:h-[150px] flex items-center justify-center bg-white shadow-xl border",
              {
                "bg-[#F2F4F8]": !first,
              },
            )}
          >
            <p
              className={cn("text-center text-xl font-bold", {
                "text-primary-t200": first,
              })}
            >
              BUSINESS GROWTH
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(false);
              setsecond(true);
              setthird(false);
            }}
            className={cn(
              "md:w-[450px] w-[260px] rounded cursor-pointer h-[50px] md:h-[150px] flex items-center justify-center bg-white shadow-xl border",
              {
                "bg-[#F2F4F8]": !second,
              },
            )}
          >
            <p
              className={cn("text-center text-xl font-bold", {
                "text-primary-t200": second,
              })}
            >
              BUSINESS RESONANCE
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(false);
              setsecond(false);
              setthird(true);
            }}
            className={cn(
              "md:w-[450px] w-[260px] rounded cursor-pointer h-[50px] md:h-[150px] flex items-center justify-center bg-white shadow-xl border",
              {
                "bg-[#F2F4F8]": !third,
              },
            )}
          >
            <p
              className={cn("text-center text-xl font-bold", {
                "text-primary-t200": third,
              })}
            >
              CUSTOMER SATISFATION
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <BusinessComponent
            text={{ h1: "HIGHEST SUCCESS RATES", h2: "HIGHEST SUCCESS RATES" }}
            className={cn({
              "translate-x-[500px] md:translate-x-[2000px] absolute": !first,
            })}
          />
          <BusinessComponent
            text={{ h1: "COORDINATED BUSINESS", h2: "COORDINATED BUSINESS" }}
            className={cn("", {
              "translate-x-[500px] md:translate-x-[2000px] absolute": !second,
            })}
          />
          <BusinessComponent
            text={{
              h1: "GREAT CUSTOMER SERVICE",
              h2: "GREAT CUSTOMER SERVICE",
            }}
            className={cn("", {
              "translate-x-[500px] md:translate-x-[2000px] absolute": !third,
            })}
          />
        </div>
      </section>
    </>
  );
};

export default Body;

const BusinessComponent: React.FC<{
  className?: string;
  text: { h1: string; h2: string };
}> = ({ className, text }) => {
  return (
    <DefaultWidth className={cn(className, "flex gap-20 items-end")}>
      <div className="md:border-r border-r-primary-100 pr-5">
        <div>
          <div className="flex items-center md:gap-6 gap-2 mt-8">
            <div className="md:w-[4.375rem] w-[50px] flex justify-center bg-[#EBF1FF] items-center md:h-[4.375rem] h-[50px]">
              <img src="./check-circle.png" alt="phone" className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className=" text-sm md:text-lg font-bold ">{text.h1}</p>
              <p className="text-primary-100 text-xs md:text-sm md:w-[250px] w-[200px] leading-[26px]">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet. adipisicing elit. Sequi, impedit.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center md:gap-6 gap-2 mt-20">
            <div className="md:w-[4.375rem] w-[60px] flex justify-center bg-[#EBF1FF] items-center md:h-[4.375rem] h-[60px]">
              <img src="./check-circle.png" alt="phone" className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className=" text-sm md:text-lg font-bold ">{text.h2}</p>
              <p className="text-primary-100 text-xs md:text-sm md:w-[250px] w-[200px] leading-[26px]">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet. adipisicing elit. Sequi, impedit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block space-y-32 hidden ">
        <p className="text-primary-100 text-lg">
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form injected humour or
          randomised words which don't look believable.
        </p>
        <ul className="list-disc text-primary-100">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </div>
    </DefaultWidth>
  );
};
