import React from "react";

const Education = () => {
  return (
    <div className="mt-6 sm:mt-10">
      <h2 className="text-black dark:text-gray-300 mb-3 sm:mb-5">education.</h2>

      <div className="flex sm:flex-row justify-between items-start mt-3 sm:mt-5 gap-2 sm:gap-0">
        <div>
          <h3 className="text-base sm:text-lg">Bachelor's in Computer Application (BCA)</h3>
          <p className="text-sm">DSEU Shakarpur Campus-1</p>
        </div>
        <div className="mt-1 sm:mt-0">
          <p className="text-sm">2023-2026</p>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between items-start mt-3 sm:mt-5 gap-2 sm:gap-0">
        <div>
          <h3 className="text-base sm:text-lg">Senior Secondary (XII)</h3>
          <p className="text-sm">S (Co-ed) Vidyalaya, Begumpur, New Delhi</p>
        </div>
        <div className="mt-1 sm:mt-0">
          <p className="text-sm">2016-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
