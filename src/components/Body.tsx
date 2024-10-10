import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import DefaultWidth from "./tools/DefaultWidth";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Body = () => {
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
          <div className="gap-8 w-[23rem] md:w-[39.125rem] shadow-2xl bg-white md:p-0 p-10 md:h-[222px] flex md:flex-row flex-col items-center justify-center">
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

          <div className="gap-8 w-[23rem] md:w-[39.125rem] shadow-2xl md:-translate-y-0 -translate-y-1  md:-translate-x-3 bg-white md:p-0 p-10 md:h-[222px] flex md:flex-row flex-col items-center justify-center">
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
            <div className="w-[290px] bg-primary-100 md:h-[25.625rem] h-[15.625rem]">
              <div>
                <p>Thought leadership</p>
                <p>businesses growth</p>
              </div>
            </div>
            <div className="w-[290px] bg-primary-100 md:h-[25.625rem] h-[15.625rem]"></div>
            <div className="w-[290px] bg-primary-100 md:h-[25.625rem] h-[15.625rem]"></div>
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
                CONSULTANT SOLUTIONS
              </p>
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="h-[90vh]">
        <div className="flex md:flex-row flex-col justify-center gap-2 -translate-y-[15.625rem] md:-translate-y-[4.5rem]">
          <div className="w-[450px] h-[150px] bg-white"></div>
          <div className="w-[450px] h-[150px] bg-[#F2F4F8]"></div>
          <div className="w-[450px] h-[150px] bg-[#F2F4F8]"></div>
        </div>
      </section>
    </>
  );
};

export default Body;

const FaqList = [
  {
    title: "THINK AHEAD AND BOOST YOUR BUSINESS?",
    content:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    title: " HOW CONSULTANCY EXPERTS WORK?",
    content: "Yes, any time! Cancelling is easy from your account settings.",
  },
  {
    title: "WHAT IS THE BEST ADVICE FOR GROWTH?",
    content:
      "Yes! Simply click Kids Play Now on any desktop or login to the MoneyPrep app.",
  },
  {
    title: "HOW TO IMPROVE YOUR BUSINESS?",
    content:
      "We cover all the essential smart money topics – spending, saving, everyday commerce, entrepreneurship and much more!",
  },
];

const Faq = () => {
  return (
    <section className="flex flex-col justify-center items-center my-[6.25rem]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[2.8125rem] leading-[3.375rem] text-text-100 font-bold text-center">
          FAQ
        </h1>
        <p className="text-[0.9375rem] leading-[0.9375rem] font-roboto font-light text-center mt-1">
          Frequently asked questions
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center md:mt-5 items-center md:items-end gap-16 md:h-[70vh]">
        <Accordion
          type="single"
          collapsible
          className="md:w-[586px] w-[350px] mx-auto"
        >
          {FaqList.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 2}`}
              className="data-[state=open]:rounded data-[state=closed]:bg-[#F2F4F8] my-5 data-[state=open]:shadow-lg data-[state=open]:border"
            >
              <AccordionTrigger className="hover:no-underline text-[1rem] text-text-200 leading-[1.25rem] p-8 font-[900]">
                <p>
                  <span className="text-primary-t200 pr-5">0{index + 1}</span>
                  {item.title}
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-6 font-roboto p-5 text-text-200">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div>
          <div className="h-full flex flex-col justify-end pb-4 md:pl-8">
            <p className="flex gap-4">
              <span className="">
                <Check className="text-primary-t200" />
              </span>{" "}
              Lorem ipsum dolor sit amet.
            </p>
            <p className="flex gap-4">
              <span className="">
                <Check className="text-primary-t200" />
              </span>{" "}
              Lorem ipsum dolor sit amet. Lorem.
            </p>
            <p className="flex gap-4">
              <span className="">
                <Check className="text-primary-t200" />
              </span>{" "}
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </p>
            <p className="flex gap-4">
              <span className="">
                <Check className="text-primary-t200" />
              </span>{" "}
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </p>
            <p className="flex gap-4">
              <span className="">
                <Check className="text-primary-t200" />
              </span>{" "}
              Lorem ipsum dolor sit amet. Lorem ipsum.
            </p>
          </div>
        </div>
        <div className="bg-primary-t200 w-[150px] h-[130px] flex justify-center items-center">
          <div className="text-white">
            <p className="text-4xl font-bold text-center">30</p>
            <p className="w-[5.625rem] text-center text-base font-semibold">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimony = () => {
  return (
    <DefaultWidth className="">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="space-y-8">
          <p className="text-4xl text-center md:text-left md:text-5xl font-bold max-w-[451px] ">
            WHAT THEY ARE TALKING ABOUT?
          </p>
          <p className="text-center md:text-left text-sm text-primary-100">
            Trusted by more than 4,200 customers
          </p>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[330px] md:max-w-[765px] mt-8 md:mt-0"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 ">
                  <div className="">
                    <Card className="border-none rounded bg-white shadow-xl">
                      <CardContent className="flex flex-col items-center bg-white .justify-center p-8 rounded">
                        <div className="">
                          <p className="text-primary-100 text-sm p-2 px-5 leading-5 font-semibold w-[300px] md:w-[380px]">
                            Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod
                            tempor incididunt ut labore et dolore magna
                            aliqua.Lorem ipsum is simply free text dolor sit
                            amet,consectetur notted adipisicing elit sed do
                            eiusmod tempor
                          </p>
                          <p className="px-5 text-xs font-semibold p-2 flex items-end  mt-5 cursor-pointer text-primary-t200">
                            Tugg Devs
                          </p>
                          <p className="px-5 text-xs font-semibold p-1 flex items-end cursor-pointer text-primary-100">
                            customer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-y-40 md:translate-y-32 translate-x-10 md:-translate-x-[305px] h-10 w-10 items-center" />
            <CarouselNext className="translate-y-40 md:translate-y-32 translate-x-10 left-64 md:-translate-x-[305px] h-10 w-10 items-center md:left-0" />
          </Carousel>
        </div>
      </div>
    </DefaultWidth>
  );
};
