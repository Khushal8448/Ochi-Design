import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full text-white relative py-28 rounded-t-2xl bg-[#004D43]">
      <div className="text gap-10 flex whitespace-nowrap overflow-hidden">
        <div className="absolute top-24 w-full">
          <svg width="100%" height="1">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#558882"
              strokeWidth="100"
            />
          </svg>
        </div>
        <div className="absolute bottom-24 w-full">
          <svg width="100%" height="1">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#558882"
              strokeWidth="100"
            />
          </svg>
        </div>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[28vw] font-FoundersGrotesk leading-[.8] mt-[-3.4vw] font-semibold uppercase "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          animate={{ x: "-100%" }}
          className="text-[28vw] font-FoundersGrotesk leading-[.8] mt-[-3.4vw] font-semibold uppercase "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          animate={{ x: "-100%" }}
          className="text-[28vw] font-FoundersGrotesk leading-[.8] mt-[-3.4vw] font-semibold uppercase "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
