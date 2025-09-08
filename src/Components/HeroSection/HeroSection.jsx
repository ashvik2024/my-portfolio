import SplitText from "../TextStyles/SplitText";
import TextType from "../TextStyles/TextType";
import About from "./About/About";
import DateTimeLocation from "./About/DateTimeLocation";
import TechnicalSkills from "./Skills/TechnicalSkills";
import profileGif from "../../assets/profile-gif.gif";
import Education from "./Education/Education";

const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <section className="flex flex-col justify-center w-full max-w-5xl">
        {/* Top Row: GIF + Name + DateTime */}
        <div className="flex justify-between items-center w-full gap-6">
          {/* GIF + Name */}
          <div className="flex items-center gap-4">
            <img
              src={profileGif} // ✅ works
              alt="Animated GIF"
              className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
            />

            {/* Name & Role */}
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-extrabold font-sans text-gray-900 dark:text-white">
                <SplitText text="Vikas Kumar" delay={200} duration={0.6} />
              </h1>
              <p className="text-gray-700 dark:text-gray-300 font-extrabold text-sm">
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

          {/* Date & Location */}
          <div className="flex-shrink-0">
            <DateTimeLocation />
          </div>
        </div>

        {/* About Me */}
        <About />

        <hr className="border-t-2 border-gray-300 my-6 dark:border-gray-700" />

        {/* Skills */}
        <TechnicalSkills />
        <Education/>
      </section>
    </div>
  );
};

export default HeroSection;
