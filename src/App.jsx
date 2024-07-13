import About from "./components/About";
import Eyes from "./components/Eyes";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full bg-[#F1F1F1] min-h-screen text-[#212121]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  );
};

export default App;
