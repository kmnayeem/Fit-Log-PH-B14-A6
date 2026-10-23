import DetailsPageButton from '@/components/DetailsPageButton';
import { getSingleWorks } from '@/lib/api';
import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';

const WorkOutsDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const work = await getSingleWorks(id);

    if (!work || !work.name) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0F1115] p-6 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">

                <div className="relative h-[500px] w-full overflow-hidden rounded-xl md:h-[650px] md:w-1/2">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-extrabold uppercase">
                        {work.name}
                    </h1>

                    <p className="mt-2 text-sm text-[#9CA3AF]">
                        {work.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {(Array.isArray(work.muscleGroups) ? work.muscleGroups : []).map(
                            (muscle: string, index: number) => (
                                <span
                                    key={`${muscle}-${index}`}
                                    className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs text-black"
                                >
                                    {muscle}
                                </span>
                            )
                        )}
                    </div>

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

                    <h2 className="mt-6 text-sm font-bold">INSTRUCTIONS</h2>

                    <ol className="mt-3 list-decimal space-y-3 pl-4 text-xs text-[#D1D5DB]">
                        {(Array.isArray(work.instructions) ? work.instructions : []).map(
                            (instruction: string, index: number) => (
                                <li key={index}>{instruction}</li>
                            )
                        )}
                    </ol>

                    <DetailsPageButton work={work} />
                </div>

            </div>
        </div>
    );
};

export default WorkOutsDetailsPage;
