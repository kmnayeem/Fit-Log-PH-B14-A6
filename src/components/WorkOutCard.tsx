import { IWorkout } from '@/Types/work.type';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire, FaRegClock, FaRegStar } from 'react-icons/fa';

const WorkOutCard = ({ works }: { works: IWorkout }) => {
  return (
    <Link href={`/workouts/${works.id}`}>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-[#222630] bg-[#15171D]">

        <div className="relative h-[280px] w-full shrink-0">
          <Image
            src={works.image}
            alt={works.name}
            fill
            className="object-cover"
            sizes="(max-width: 580px) 100vw, 580px"
          />
        </div>

        <div className="flex flex-1 flex-col p-[34px]">

          <div className="mb-6 flex min-h-[32px] flex-wrap content-start gap-3">
            {works.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-4 py-1 text-base font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mb-2 min-h-[58px] text-2xl font-extrabold uppercase leading-[1.2] text-white">
            {works.name}
          </h2>

          <p className="mb-6 text-[17px] text-[#9CA3AF]">
            {works.equipment}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border border-[#222630] px-3 py-3 text-base text-[#9CA3AF]">

            <span className="flex items-center gap-2 whitespace-nowrap">
              <FaRegClock />
              {works.duration} min
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap">
              <FaFire />
              {works.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap">
              <FaRegStar />
              {works.rating}
            </span>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;