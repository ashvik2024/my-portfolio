import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div className="">
      {/* About Me */}
      <div className="space-y-3 w-full text-justify">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed w-full">
          Hi! 👋 I'm Vikas Kumar, a final-year BCA student and an aspiring MERN
          Stack developer. I started coding with a simple “Hello World” and now
          love building web apps.
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed w-full">
          I enjoy creating websites, designing frontends, and learning how the
          backend works. Sometimes things work perfectly, sometimes they break,
          but I always enjoy the process.
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed w-full">
          Outside of coding, I explore new frameworks, solve coding challenges,
          plan trips around North India, and occasionally try new fast food
          cafes.
        </p>

        <SocialLinks />
      </div>
    </div>
  );
};

export default About;
