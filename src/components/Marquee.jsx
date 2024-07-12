import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-24 rounded-t-2xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 gap-10 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[28vw] font-FoundersGrotesk leading-[.8] mt-[-6vh] font-semibold uppercase "
        >
          we are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          animate={{ x: "-100%" }}
          className="text-[28vw] font-FoundersGrotesk leading-[.8] mt-[-6vh] font-semibold uppercase "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
