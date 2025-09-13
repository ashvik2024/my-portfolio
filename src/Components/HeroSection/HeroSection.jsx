import SplitText from "../TextStyles/SplitText";
import TextType from "../TextStyles/TextType";
import About from "./About/About";
import DateTimeLocation from "./About/DateTimeLocation";
import TechnicalSkills from "./Skills/TechnicalSkills";
import profileGif from "../../assets/profile-gif.gif";
import Education from "./Education/Education";
import Achievements from "../Achivments/Achievements";
import Projects from "../Projects/Projects";

const HeroSection = () => {
  return (
    <div className="flex justify-center  ">
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
            <div className="text-left ">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                  <SplitText text= "Vikas Kumar" delay={200} duration={0.6} />
                  {/* Checkmark Icon */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 cursor-pointer "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                  </svg>
                </h1>
              </div>

              <p className="text-base font-extrabold text-gray-700 dark:text-gray-300">
                <TextType
                  text={["MERN Stack Developer"]}
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
        <hr className="border-t-1 border-black my-6 dark:border-gray-700" />

        {/* Skills */}
        <div className="">
          <TechnicalSkills />
        </div>

        {/* Education */}
        <div className="mt-5">
          <Education />
        </div>

        <div className="mt-5">
          <Projects />
        </div>

        <div className="mt-5">{/* <Achievements /> */}</div>
      </section>
    </div>
  );
};

export default HeroSection;
