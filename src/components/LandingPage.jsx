import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-12">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
          <div
            key={index}
            className="masker text-[9vw] font-semibold  font-FoundersGrotesk"
          >
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="w-[9vw] rounded-md mr-[0.6vw] bg-red-700 h-[6vw]"></div>
              )}
              <h1 className="uppercase leading-[7vw]">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] flex max-lg:flex-col max-lg:items-start max-lg:gap-8 justify-between items-center py-5 px-12 border-zinc-800 mt-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-base font-light font-NeueMontreal tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-1.5 items-center">
          <div className="px-5 py-2 border-[1px] font-NeueMontreal  font-light border-zinc-900 uppercase leading-none cursor-pointer rounded-full">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-900  rounded-full">
            <MdArrowOutward className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
