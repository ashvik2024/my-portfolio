import React from "react";

const Education = () => {
  return (
    <div>
      <h2 className="text-black dark:text-gray-300 mb-3 sm:mb-5">education.</h2>

      {/* Education Item */}
      <div className="flex sm:flex-row justify-between sm:items-center mt-3 sm:mt-5">
        <div className="sm:w-3/4">
          <h3 className="text-base sm:text-lg font-semibold">
            Bachelor's in Computer Application (BCA)
          </h3>
          <p className="">
            DSEU Shakarpur Campus-1
          </p>
        </div>
        <div className="sm:w-1/4 sm:text-right mt-1 sm:mt-0">
          <p className="">2023-2026</p>
        </div>
      </div>

      {/* Education Item */}
      <div className="flex sm:flex-row justify-between sm:items-center mt-3 sm:mt-5">
        <div className="sm:w-3/4">
          <h3 className="text-base sm:text-lg font-semibold">
            Senior Secondary (XII)
          </h3>
          <p className="">
            S (Co-ed) Vidyalaya, Begumpur, New Delhi
          </p>
        </div>
        <div className="sm:w-1/4 sm:text-right mt-1 sm:mt-0">
          <p className="">2016-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
