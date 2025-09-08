import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div className="w-full mt-10 ">
      {/* About Me */}
      <div className="space-y-3">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Hey there! 👋 I'm Vikas Kumar, a final-year BCA student and an
          aspiring MERN Stack Developer who turned a simple “Hello World”
          tutorial into a full-blown coding obsession.
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          I spend most of my time building web apps, experimenting with frontend
          designs, and figuring out how to make backend stuff actually work.
          Sometimes it works, sometimes it breaks spectacularly, but I love
          every bit of the process.
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          When I'm not coding, you’ll find me exploring new frameworks, solving
          coding challenges, or planning fun trips around North India. Oh, and I
          occasionally indulge in trying out fast food cafes or brainstorming
          startup ideas.
        </p>

        <SocialLinks />
      </div>
    </div>
  );
};

export default About;
