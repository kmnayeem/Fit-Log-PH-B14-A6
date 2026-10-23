
import DetailsPageButton from '@/components/DetailsPageButton';
import { getSingleWorks } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkOutsDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const work = await getSingleWorks(id);

    if (!work) {
        return <div className="p-10 text-white">Workout not found!</div>;
    }

    return (
        <div className="min-h-screen bg-[#0F1115] p-6 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">

                {/* Left Side: Image */}
                <div className="relative h-[500px] w-full overflow-hidden rounded-xl md:h-[650px] md:w-1/2">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-extrabold uppercase">
                        {work.name}
                    </h1>

                    <p className="mt-2 text-sm text-[#9CA3AF]">
                        {work.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {work.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information Card */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#232834] bg-[#171A21]">
                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">EQUIPMENT</span>
                            <span>{work.equipment}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">DIFFICULTY</span>
                            <span>{work.difficulty}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">SETS</span>
                            <span>{work.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">REPS</span>
                            <span>{work.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">DURATION</span>
                            <span>{work.duration} min</span>
                        </div>

                        <div className="flex justify-between border-b border-[#232834] p-4 text-xs">
                            <span className="text-[#9CA3AF]">CALORIES</span>
                            <span>{work.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between p-4 text-xs">
                            <span className="text-[#9CA3AF]">RATING</span>
                            <span>{work.rating}</span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <h2 className="mt-6 text-sm font-bold">INSTRUCTIONS</h2>

                    <ol className="mt-3 list-decimal space-y-3 pl-4 text-xs text-[#D1D5DB]">
                        {work.instructions.map(
                            (instruction: string, index: number) => (
                                <li key={index}>{instruction}</li>
                            )
                        )}
                    </ol>

                    {/* Buttons */}
                    <DetailsPageButton/>
                </div>

            </div>
        </div>
    );
};

export default WorkOutsDetailsPage;
