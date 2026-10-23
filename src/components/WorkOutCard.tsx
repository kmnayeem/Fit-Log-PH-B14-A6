import { IWorkout } from '@/Types/work.type';
import Image from 'next/image';
import { FaFire, FaRegClock, FaRegStar } from 'react-icons/fa';

const WorkOutCard = ({ works }: { works: IWorkout }) => {
  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-[#222630] bg-[#15171D]">

      <div className="relative h-[280px] w-full">
        <Image
          src={works.image}
          alt={works.name}
          fill
          className="object-cover"
          sizes="(max-width: 580px) 100vw, 580px"
        />
      </div>

      <div className="p-[34px]">

        <div className="mb-6 flex flex-wrap gap-3">
          {works.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-4 py-1 text-base font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="mb-2 text-2xl font-extrabold uppercase text-white">
          {works.name}
        </h2>

        <p className="mb-6 text-[17px] text-[#9CA3AF]">
          {works.equipment}
        </p>

        <div className="flex flex-wrap items-center gap-6 border border-[#222630] px-3 py-3 text-base text-[#9CA3AF]">

          <span className="flex items-center gap-2">
            <FaRegClock />
            {works.duration} min
          </span>

          <span className="flex items-center gap-2">
            <FaFire />
            {works.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-2">
            <FaRegStar />
            {works.rating.toFixed(1)}
          </span>

        </div>
      </div>
    </div>
  );
};

export default WorkOutCard;
