import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav
      className={cn(
        "lg:min-h-[5rem] lg:h-fit h-[5rem] overflow-hidden w-full bg-primary-100 border-b duration-300 border-white fixed top-0 z-10",
        {
          "h-[55vh]": click,
        },
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full lg:w-fit">
          <div className="lg:border-r lg:px-8 py-2 border-white w-fit">
            <img
              src="./Endeavor.png"
              alt="logo"
              className="w-[80px] object-contain"
            />
          </div>
          <div className="lg:hidden flex justify-end items-center gap-2 w-full">
            <div>
              <img
                src="./search.png"
                className={cn("w-5 cursor-pointer", {
                  hidden: click,
                })}
                alt="search"
              />
            </div>
            <div
              onClick={() => setClick(!click)}
              className={cn("cursor-pointer w-fit py-2 flex flex-col px-3", {
                "gap-2": !click,
              })}
            >
              <div
                className={cn(
                  "h-[2px] rounded-3xl w-5 bg-white duration-300 rotate-45",
                  {
                    "rotate-0 pr-8": !click,
                  },
                )}
              ></div>
              <div
                className={cn(
                  "h-[2px] rounded-3xl w-5 bg-white duration-300 -rotate-45",
                  {
                    "rotate-0": !click,
                  },
                )}
              ></div>
            </div>
          </div>
          <div>
            <ul className="lg:flex hidden pl-1 xl:pl-20 font-jost text-white font-semibold text-lg">
              {navLink.map((link) => (
                <li
                  className="px-3 cursor-pointer text-xs xl:text-sm flex gap-1"
                  key={link}
                >
                  {link.toUpperCase()}{" "}
                  <ChevronDown
                    className={cn("text-gray-700 cursor-pointer", {
                      hidden: link != "Services",
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:flex hidden gap-2">
          <ul className="flex items-center  pr-1 xl:pr-16">
            {socials.map((social) => (
              <li className="px-2 w-8 xl:w-10 cursor-pointer" key={social}>
                <img src={social} alt={social} />
              </li>
            ))}
          </ul>
          <div className="border-r border-l min-h-[5.9375rem] mr-5 flex items-center px-8 border-white">
            <img src="./search.png" alt="search" className="cursor-pointer" />
          </div>
          <div className="font-jost flex flex-col text-white justify-center pr-10">
            <p className="xl:text-base text-sm">Need help?</p>
            <p className="xl:font-semibold">+234 8004023</p>
          </div>
        </div>
      </div>
      <div
        className={cn("lg:hidden pl-2 mt-5 duration-500", {
          "translate-x-5": click,
          "translate-x-0": !click,
        })}
      >
        <ul className="">
          {navLink.map((link) => (
            <li
              key={link}
              className={cn(
                "py-1 font-jost  text-gray-200 font-semibold text-lg",
              )}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-5">
          {socials.map((link) => (
            <img className={cn("w-5 cursor-pointer")} key={link} src={link} />
          ))}
        </div>
        <div className="font-jost mt-8 flex text-base flex-col text-white justify-center pr-10">
          <p>Need help?</p>
          <p className="">+234 8004023</p>
        </div>
      </div>
    </nav>
  );
};

const navLink = ["Home", "Services", "Pages", "Case Shop", "Blog", "Content"];
const socials = [
  "./facebook.png",
  "./instagram.png",
  "./twitter.png",
  "./linkedin.png",
];

export default Navbar;
