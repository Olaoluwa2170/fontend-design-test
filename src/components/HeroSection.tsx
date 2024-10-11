import DefaultWidth from "./tools/DefaultWidth";
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
      <section className="lg:h-[90vh] lg:pb-0 pb-10 overflow-hidden bg-primary-100">
        <DefaultWidth>
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col items-center lg:items-start gap-6 pt-[120px] lg:pt-[9.375rem]">
              <p className="lg:p-3 p-1 lg:text-base  text-sm bg-[#434B4D] w-fit font-jost rounded-sm">
                Welcome to our Firm
              </p>
              <p className="font-jost font-bold w-[450px] lg:w-[37.5rem] shrink-0 text-4xl lg:text-left text-center lg:text-7xl text-white">
                Consulting For Every Business
              </p>
              <div className="mt-10 lg:block hidden py-3 px-5 bg-primary-t200 hover:scale-110 duration-300 cursor-pointer w-fit">
                Discover More
              </div>
            </div>
            <div className="mt-5 overflow-hidden shrink-0">
              <img src="./HeroImage.png" className="w-[43.75rem]" alt="" />
            </div>
            <div className="lg:hidden w-full flex justify-center">
              <div className="mt-8 py-2 px-3 rounded  bg-primary-t200 hover:scale-110 duration-300 cursor-pointer w-fit">
                Discover More
              </div>
            </div>
          </div>
        </DefaultWidth>
      </section>
      <section className="bg-[#0F0D1D] h-[80vh] lg:h-screen pt-[6.25rem]">
        <DefaultWidth>
          <div>
            <h2 className="text-white text-3xl lg:text-5xl font-bold text-center">
              REAL-WORLD EXPERIENCE
            </h2>
            <p className="text-center text-[#726F84] text-sm lg:text-lg font-bold mt-2">
              The best business consulting firm you can count on!
            </p>
            <div className="w-full flex flex-col lg:h-[50vh] items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-sm lg:max-w-[60.3125rem] mt-10 lg:mt-32"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="lg:basis-1/2"
                    >
                      <div className="">
                        <Card className="border-none rounded bg-black">
                          <CardContent className="flex items-center bg-black justify-center p-8 rounded">
                            <div className="">
                              <p className="text-white text-2xl p-2 leading-5 font-semibold w-[200px]">
                                Wealth Management
                              </p>
                              <p className="text-xs font-semibold p-2 flex items-end h-[5rem] cursor-pointer text-[#8F8DA0]">
                                READ MORE
                              </p>
                            </div>
                            <img
                              src="./bitbucket.png"
                              className="w-20 mt-14 p-2 lg:mt-24 hover:scale-110 duration-300 cursor-pointer"
                              alt="bitbucket"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="rounded-none translate-y-44 lg:translate-y-64 -left-10 bg-[#0e1f49] text-primary-t200  border border-primary-t200" />
                <CarouselNext className="rounded-none translate-y-44 lg:translate-y-64 -right-10 bg-[#0e1f49] border text-primary-t200 border-primary-t200" />
              </Carousel>
              <div className="text-white h-[70%] pt-5 lg:pt-20 w-full flex items-center gap-2 justify-center">
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
