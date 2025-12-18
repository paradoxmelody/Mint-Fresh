import React from "react";

const SectionHeading: React.FC<{ heading: string }> = ({ heading }) => {
  return (
    <div className="lg:col-span-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-white">
        {heading}
      </h2>
      <div className="w-[75px] h-[5px] mt-2 rounded-full bg-(--accent-color)"></div>
    </div>
  );
};

export default SectionHeading;