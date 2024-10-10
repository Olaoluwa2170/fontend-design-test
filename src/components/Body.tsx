import DefaultWidth from "./tools/DefaultWidth";

const Body = () => {
  return <>
    <section>
        <DefaultWidth>
            <div className="flex">
                <div></div>
                <div>
                    <p className="max-w-[29.6875rem] font-bold text-5xl text-primary-tdefault">
                    We’re leading in the market
                    </p>
                    <p className="max-w-[34.125rem] space-y-7">
                        <span className="text-lg leading-[1.5rem] font-light text-primary-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius quisquam expedita fugiat inventore! Ducimus reiciendis itaque aperiam minus! Dolorem?</span>
                        <span className="text-[#3C72FC] text-2xl">
                        We have 35+ years of experience. We offer marketing and consulting services
                        </span>
                    </p>
                </div>
            </div>
        </DefaultWidth>
    </section>
  </>;
};

export default Body;
