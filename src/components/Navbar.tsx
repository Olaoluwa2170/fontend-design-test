import React from "react";
import logo from "../assets/images/endeavor.png"; // Ensure this path is correct and the file exists
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  return (
    <nav className="md:min-h-[5rem] w-full bg-primary-100 border-b border-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-black">
          <div className="md:border-r px-8 py-2 border-white w-fit">
            <img src={logo} alt="logo" className="w-[50px] md:w-[80px] object-contain" />
          </div>
          <div className="md:hidden">
              <div className="h-[0.0625rem] w-5 bg-black"></div>
          </div>
          <div>
            <ul className="md:flex hidden pl-20 font-jost text-white font-semibold text-lg">
              {navLink.map((link) => (
                <li
                  className="px-3 cursor-pointer text-base flex gap-1"
                  key={link}
                >
                  {link.toUpperCase()}{" "}
                  <ChevronDown
                    className={cn("w-3 mt-1 cursor-pointer", {
                      hidden: link != "Services",
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:flex hidden gap-2">
          <ul className="flex items-center pr-16">
            {socials.map((social) => (
              <li className="px-2 w-10 cursor-pointer" key={social}>
                <img src={social} alt={social} />
              </li>
            ))}
          </ul>
          <div className="border-r border-l min-h-[5.9375rem] mr-5 flex items-center px-8 border-white">
            <img src="./search.png" alt="search" />
          </div>
          <div className="font-jost flex flex-col text-white justify-center pr-10">
            <p>Need help?</p>
            <p className="font-semibold">+234 8004023</p>
          </div>
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
