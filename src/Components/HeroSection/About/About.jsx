import SocialLinks from "./SocialLinks";
const About = () => {
  return (
    <div>
      {/* About Me */}
      <div className="text-left flex-1 mt-10">
        <p className="text-base">
          Hey there! 👋 I'm Vikas Kumar, a final-year BCA student and an
          aspiring MERN Stack Developer who turned a simple “Hello World”
          tutorial into a full-blown coding obsession.
        </p>

        <p className="text-base mt-2">
          I spend most of my time building web apps, experimenting with frontend
          designs, and figuring out how to make backend stuff actually work.
          Sometimes it works, sometimes it breaks spectacularly, but I love
          every bit of the process.
        </p>

        <p className="text-base mt-2">
         When I'm not coding, you’ll find me exploring new frameworks, solving coding challenges, or planning fun trips around North India. Oh, and I occasionally indulge in trying out fast food cafes or brainstorming startup ideas.
        </p>

        <SocialLinks />
      </div>
    </div>
  );
};

export default About;
