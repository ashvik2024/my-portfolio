import SplitText from "../TextStyles/SplitText";
import TextType from "../TextStyles/TextType";
import About from "./About/About";
import DateTimeLocation from "./About/DateTimeLocation";
import TechnicalSkills from "./Skills/TechnicalSkills";
import profileGif from "../../assets/profile-gif.gif";
import Education from "./Education/Education";
import Achievements from "../Achivments/Achievements";

const HeroSection = () => {
  return (
    <div className="flex justify-center ">
      <section className="flex flex-col justify-center max-w-5xl">
        {/* Top Row: GIF + Name + DateTime */}
        <div className="flex flex-col md:flex-row justify-between w-full ">
          {/* GIF + Name */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={profileGif}
              alt="Animated GIF"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            {/* Name & Role */}
            <div className="text-left">
<h1 className="text-2xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white">
  <SplitText text="Vikas Kumar" delay={200} duration={0.6} />
</h1>

              <p className="text-base font-extrabold text-gray-700 dark:text-gray-300">
                <TextType
                  text={["MERN Stack Developer asdsa"]}
                  typingSpeed={200}
                  pauseDuration={15000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-gray-500"
                />
              </p>
            </div>
          </div>

          {/* Date & Location (hidden on small screens) */}
          <div className="hidden md:block flex-shrink-0">
            <DateTimeLocation />
          </div>
        </div>

        {/* About Me */}
        <About />
        <hr className="border-t-2 border-gray-300 my-6 dark:border-gray-700" />

        {/* Skills */}
        <div className="">
          <TechnicalSkills />
        </div>
        <hr className="border-t-2 border-gray-300 my-6 dark:border-gray-700" />
        {/* Education */}
        <div className="">
          <Education />
        </div>
        <hr className="border-t-2 border-gray-300 my-6 dark:border-gray-700" />
        <div className="">
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
