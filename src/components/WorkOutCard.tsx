"use client";

import { useState } from "react";
import { IWorkout } from "@/Types/work.type";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";

const WorkOutCard = ({ works }: { works: IWorkout }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/workouts/${works.id}`} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] transition duration-300 hover:border-[#C2F10D]">

        <div className="relative h-[250px] w-full overflow-hidden bg-[#222630]">
          <Image
            src={works.image}
            alt={works.name}
            fill
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-all duration-500 hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">

          <div className="mb-4 flex flex-wrap gap-2">
            {works.muscleGroups.map((muscle, index) => (
              <span
                key={`${muscle}-${index}`}
                className="rounded-full bg-[#C2F10D]/10 px-3 py-1 text-xs font-bold uppercase text-[#C2F10D]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mb-2 text-xl font-extrabold uppercase text-white">
            {works.name}
          </h2>

          <p className="mb-5 text-sm text-[#9CA3AF]">
            {works.equipment}
          </p>

          <div className="mt-auto flex flex-wrap gap-4 border-t border-[#222630] pt-4 text-sm text-[#9CA3AF]">

            <span className="flex items-center gap-2">
              <FaRegClock className="text-[#C2F10D]" />
              {works.duration} min
            </span>

            <span className="flex items-center gap-2">
              <FaFire className="text-[#C2F10D]" />
              {works.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <FaRegStar className="text-[#C2F10D]" />
              {works.rating}
            </span>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;

