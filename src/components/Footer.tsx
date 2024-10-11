import DefaultWidth from "./tools/DefaultWidth";

const Footer = () => {
  return (
    <section className="md:h-screen bg-[#0F0D1D] py-[6.25rem]">
      <DefaultWidth className="flex md:flex-row flex-col items-start justify-center max-w-[90vw] gap-32 md:gap-10">
        <div className="space-y-10">
          <img
            src="./Endeavor.png"
            className="w-[80px] object-contain"
            alt=""
          />
          <div className="space-y-10">
            <p className="max-w-[23.125rem] text-lg text-white">
              Welcome to our consultancy agency. Lore ipsum simply text amet
              cing elit simply text amet cing elit.
            </p>
            <div className="h-[1px] bg-primary-100 w-full md:w-[467px]">
              <ul className="pt-20 text-lg space-y-4 text-primary-100">
                <li className="flex gap-2">
                  <img
                    src="./phone-square-alt.png"
                    className=" w-6 h-6"
                    alt=""
                  />
                  +92 666 888 0000
                </li>
                <li className="flex gap-2">
                  <img src="./email.png" className=" w-6 h-6" alt="" />
                  needhelp@company.com
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="./map-marker-alt.png" className=" w-6 h-6" alt="" />
                  66 Broklyn Street New York, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-20 mt-32 md:mt-0">
          <p className="text-gray-50 text-xl font-bold">EXPLORE</p>
          <div className="flex gap-10">
            <div>
              <ul className="space-y-10 text-lg text-primary-100 font-bold">
                <li>About</li>
                <li>Meet our Team</li>
                <li>Case Studies</li>
                <li>Latest News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-10 text-lg text-primary-100 font-bold">
                <li>Support</li>
                <li>Terms of Use</li>
                <li>Privacy & Policy</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-20">
          <p className="text-gray-50 text-xl font-bold">NEWSLETTER</p>
          <div className="md:w-[591px] h-[205px] bg-[#06050C] gap-10 flex flex-col md:pl-12 p-3 justify-center">
            <p className="text-lg text-primary-100 w-[352px] text-left">
              Subscribe for latest articles and resources
            </p>
            <div className="md:w-[454px] flex justify-around items-center bg-white h-[65px]">
              <p className="text-sm text-primary-100 font-bold">
                Email address
              </p>
              <div className="py-3 px-5 bg-[#3C72FC] text-white font-bold hover:scale-110 duration-300 cursor-pointer w-fit">
                REGISTER
              </div>
            </div>
          </div>
        </div>
      </DefaultWidth>
    </section>
  );
};

export default Footer;
