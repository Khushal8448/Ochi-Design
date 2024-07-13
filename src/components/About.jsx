import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] font-medium text-[#212121] rounded-t-3xl">
      <div className="w-full">
        <h1 className="px-[3vw] py-[5rem] font-NeueMontreal text-[3.8vw] leading-[1.1]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, <br /> explain complex ideas, and hire
          great people.
        </h1>
        <div className="w-full">
          <svg width="100%" height="1">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="black"
              strokeWidth="9"
            />
          </svg>
        </div>
      </div>
      <div className="w-full px-[3vw] py-[1vw] flex justify-between">
        <div>
          <h1 className="font-NeueMontreal text-[3.8vw] leading-none mb-4">
            Our approach:
          </h1>
          <button className="uppercase mb-10 font-NeueMontreal flex items-center gap-7 justify-between bg-slate-900 py-4 px-6 text-white rounded-full">
            <div className="text-sm">Read more</div>
            <div className="h-2 w-2 bg-white rounded-full"></div>

            {/* <span className="w-8 h-8 flex items-center justify-center border-zinc-900 rounded-full">
              <MdArrowOutward className="text-md" />
            </span> */}
          </button>
        </div>

        <div className="w-1/2 h-[64vh] mb-10 rounded-2xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            width="100%"
            height="100%"
            className="bg-cover"
            alt="people standing"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
