import { IWorkout } from "@/Types/work.type";
import React from "react";
import WorkOutCard from "./WorkOutCard";

const AllWorks = ({ works }: { works: IWorkout[] }) => {
  return (
    <div
      id="library"
      className="container mx-auto mt-8 mb-8 scroll-mt-6 sm:mt-10 sm:mb-10 lg:mt-12 lg:mb-12"
    >
      <h2 className="font-oswald text-xl font-bold uppercase leading-tight tracking-tight text-[#FFFFFF] sm:text-2xl lg:text-3xl">
        THE LIBRARY
      </h2>

      <p className="mt-1 font-sans text-[11px] leading-relaxed text-[#9CA3AF] sm:text-xs lg:text-sm">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="group cursor-pointer rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
          >
            <WorkOutCard works={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorks;
