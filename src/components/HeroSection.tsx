import DefaultWidth from "./tools/DefaultWidth";
import HeroImage from "../assets/images/HeroImage.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <>
      <section className="h-[90vh] overflow-hidden bg-primary-100">
        <DefaultWidth>
          <div className="flex justify-between.">
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
            <div className="mt-5 overflow-hidden shrink-0">
              <img src={HeroImage} className="w-[43.75rem]" alt="" />
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="bg-[#0F0D1D] h-screen pt-[100px]">
        <DefaultWidth>
          <div>
            <h2 className="text-white text-5xl font-bold text-center">
              REAL-WORLD EXPERIENCE
            </h2>
            <p className="text-center text-[#726F84] text-lg font-bold mt-2">
              The best business consulting firm you can count on!
            </p>
            <div className="w-full flex flex-col h-[50vh] items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-[60.3125rem] mt-32"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="">
                        <Card className="border-none rounded bg-black">
                          <CardContent className="flex items-center bg-black justify-center p-8 rounded">
                            <div className="">
                              <p className="text-white text-2xl leading-5 font-semibold w-[200px]">
                                Wealth Management
                              </p>
                              <p className="text-xs font-semibold flex items-end h-[5rem] cursor-pointer text-[#8F8DA0]">
                                READ MORE
                              </p>
                            </div>
                            <img
                              src="./bitbucket.png"
                              className="w-20 mt-24 hover:scale-110 duration-300 cursor-pointer"
                              alt="bitbucket"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="rounded-none translate-y-64 -left-10 bg-[#0e1f49] text-[#3C72FC]  border border-[#3C72FC]" />
                <CarouselNext className="rounded-none translate-y-64 -right-10 bg-[#0e1f49] border text-[#3C72FC] border-[#3C72FC]" />
              </Carousel>
              <div className="text-white h-[70%] pt-20 w-full flex items-center gap-2 justify-center">
                <div className="h-[0.0625rem] flex-grow shrink-0 bg-[#32303D]"></div>
                <p className="semi-bold text-base uppercase">
                  meet the partners
                </p>
                <div className="h-[0.0625rem] w-max flex-grow shrink-0 bg-[#32303D]"></div>
              </div>
            </div>
          </div>
        </DefaultWidth>
      </section>
    </>
  );
};

export default HeroSection;
