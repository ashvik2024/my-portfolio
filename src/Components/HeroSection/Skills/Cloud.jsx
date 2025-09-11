import React from 'react';

const CloudDevOps = () => {
  const techs = [
    { src: "/Vercel.svg", name: "Vercel" },
    { src: "/Netlify.svg", name: "Netlify" },
    { src: "/GitHubAction.svg", name: "GitHub Actions" },
  ];

  return (
    <div>
      <h3 className="mb-2">{`<CloudDevOps/>`}</h3>
      <ul className="flex gap-2 flex-wrap">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500"
          >
            <img src={tech.src} alt={tech.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CloudDevOps;
