import FrontEnd from "./FrontEnd";
import Tools from "./Tools";
import CloudDevOps from "./Cloud";

const TechnicalSkills = () => {
  return (
    <div>
      <h2 className="text-black dark:text-gray-300">technical skills.</h2>
      {/* FrontEnd */}
      <div className="mt-5">
        <FrontEnd />
      </div>
      {/* Tools */}
      <div className="mt-5">
        <Tools />
      </div>
      {/* Clound */}
      <div className="mt-5">
        <CloudDevOps />
      </div>
    </div>
  );
};

export default TechnicalSkills;
