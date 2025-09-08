import React from "react";

const Education = () => {
  return (
    <div className="mt-10">
      <h2 className="text-black dark:text-gray-300 mb-5 ">education.</h2>
      <div className="flex justify-between mt-5">
        <div className="">
          <h3>Bachelor's in Computer Application (BCA)</h3>
          <p className="text-sm">DSEU Shakarpur Campus-1</p>
        </div>
        <div className="year">
          <p className="text-sm">2023-2026</p>
        </div>
      </div>

      <div className=" flex justify-between mt-5">
        <div className="">
          <h3>Senior Secondary (XII)</h3>
          <p className="text-sm">S (Co-ed) Vidyalaya, Begumpur, New Delhi</p>
        </div>
        <div className="">
          <p className="text-sm">2016-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
