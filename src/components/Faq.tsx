import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const Faq = () => {
  return (
    <section className="flex flex-col justify-center items-center my-[6.25rem]">
      <div className="flex flex-col xl:pb-0 lg:pb-20 items-center justify-center">
        <h1 className="text-[2.8125rem] leading-[3.375rem] text-text-100 font-bold text-center">
          FAQ
        </h1>
        <p className="text-[0.9375rem] leading-[0.9375rem] font-roboto font-light text-center mt-1">
          Frequently asked questions
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center xl:mt-5 lg:mt-20 items-center lg:items-end gap-16 lg:h-[70vh]">
        <Accordion
          type="single"
          collapsible
          className="xl:w-[586px] w-[350px] sm:w-[370px] mx-auto"
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
          <div className="h-full flex flex-col justify-end pb-4 lg:pl-8">
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

export default Faq;
