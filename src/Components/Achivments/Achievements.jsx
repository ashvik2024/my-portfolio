
const achievements = [
  {
    title: "Freelance Event Organizer",
    description: "Managed events and campaigns for multiple companies including Thomas Cook, iQOO, and Alapino.",
  },
  {
    title: "Digital Marketing Experience",
    description: "Handled remote marketing campaigns with measurable results.",
  },
  {
    title: "Campus Leadership",
    description: "Coordinated student teams for volunteer and promotional activities.",
  },
  {
    title: "Coding & Web Development",
    description: "Built multiple projects in MERN stack during final year.",
  },
];

const Achievements = () => {
  return (
    <div className="">
      <h2 className="text-black dark:text-gray-300 mb-5 text-xl sm:text-2xl font-semibold">
        achievements.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-bold text-sm sm:text-base mb-2">{ach.title}</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {ach.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
