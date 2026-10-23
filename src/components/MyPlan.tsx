'use client';

import { useWOContext } from '@/context/WOContext';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaFire, FaRegClock, FaRegStar, FaTimes, FaCheck } from 'react-icons/fa';

const MyPlan = () => {
    const { buildList, wishList, setBuildList, setWishList } = useWOContext();

    const [activeTab, setActiveTab] = useState<"Today’s Plan" | "Saved">("Today’s Plan");

    const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");

    const [orderId, setOrderId] = useState<number[]>([]);

    const currentList = activeTab === "Today’s Plan" ? buildList : wishList;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "Duration") return a.duration - b.duration;
        if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "Rating") return b.rating - a.rating;
        return 0;
    });

    const totalPlan = currentList.length;
    const totalDuration = currentList.reduce((sum, item) => sum + item.duration, 0);
    const totalCalories = currentList.reduce((sum, item) => sum + item.caloriesBurned, 0);

    const handleRemove = (id: number) => {
        if (activeTab === "Today’s Plan") {
            setBuildList((prev) => prev.filter((item) => item.id !== id));
            toast.error('Workout removed from Today’s Plan!');
        } else {
            setWishList((prev) => prev.filter((item) => item.id !== id));
            toast.error('Workout removed from Saved!');
        }
    };

    const handleComplete = (id: number) => {
        const workoutExists = buildList.some((item) => item.id === id);

        if (!workoutExists) return;

        setBuildList((prev) => prev.filter((item) => item.id !== id));

        setOrderId((prev) =>
            prev.includes(id) ? prev : [...prev, id]
        );

        toast.success('Workout completed!');
    };

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <div className="flex min-h-[300px] w-full items-center justify-center rounded-2xl border border-dashed border-[#222630] bg-[#101216] text-center sm:min-h-[340px]">
                    <div className="px-5">
                        <h3 className="mb-2 text-lg font-extrabold leading-6 text-white">
                            NOTHING HERE YET
                        </h3>

                        <p className="mb-5 text-xs leading-5 text-[#92949B]">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex h-10 min-w-[140px] items-center justify-center rounded-full bg-[#C2F10D] px-6 text-xs font-semibold text-black transition hover:bg-[#D4FF27]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-3">
                {sortedList.map((item) => (
                    <div
                        key={item.id}
                        className="flex min-h-[92px] w-full flex-col items-stretch gap-3 rounded-xl border border-[#222630] bg-[#15171D] px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
                    >
                        <Link
                            href={`/workouts/${item.id}`}
                            className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[72px] sm:w-[120px]"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 120px"
                                className="object-cover"
                            />
                        </Link>

                        <div className="min-w-0 flex-1">
                            <h2 className="truncate text-sm font-extrabold uppercase leading-5 text-white">
                                {item.name}
                            </h2>

                            <p className="truncate text-xs leading-5 text-[#92949B]">
                                {item.equipment}
                            </p>

                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs leading-4 text-[#A1A4AD]">
                                <span className="flex items-center gap-1.5 whitespace-nowrap">
                                    <FaRegClock className="text-[#C2F800]" />
                                    {item.duration} min
                                </span>

                                <span className="flex items-center gap-1.5 whitespace-nowrap">
                                    <FaFire className="text-[#C2F800]" />
                                    {item.caloriesBurned} kcal
                                </span>

                                <span className="flex items-center gap-1.5 whitespace-nowrap">
                                    <FaRegStar className="text-[#C2F800]" />
                                    {item.rating}
                                </span>
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-1.5 sm:w-auto sm:shrink-0 sm:flex-row">
                            <Link
                                href={`/workouts/${item.id}`}
                                className="inline-flex h-8 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#303541] px-3 text-xs text-white transition hover:bg-[#252832] sm:h-9 sm:w-auto sm:px-4"
                            >
                                View Details
                            </Link>

                            {activeTab === "Today’s Plan" && (
                                <button
                                    type="button"
                                    onClick={() => handleComplete(item.id)}
                                    className="relative z-10 inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#C2F10D] px-3 text-xs font-bold text-black transition hover:bg-[#D4FF27] active:scale-95 sm:h-9 sm:w-auto sm:px-4"
                                >
                                    <FaCheck size={12} />
                                    Mark as Done
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={() => handleRemove(item.id)}
                                aria-label={`Remove ${item.name}`}
                                title="Remove workout"
                                className="relative z-10 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#303541] px-3 text-[#777B86] transition hover:bg-[#252832] hover:text-white sm:h-9 sm:w-9 sm:px-0"
                            >
                                <FaTimes size={14} />
                                <span className="ml-2 text-xs sm:hidden">
                                    Remove
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto flex w-full max-w-[1400px] flex-col gap-7 px-6 py-6 sm:px-8 lg:px-10">
            <div className="stats stats-horizontal w-full rounded-2xl border border-[#222630] bg-[#13161C] shadow-none">
                <div className="stat px-6 py-5">
                    <div className="stat-title text-xs text-[#92949B]">
                        Exercises
                    </div>
                    <div className="stat-value text-4xl leading-[1.2] text-[#CCFF00]">
                        {totalPlan}
                    </div>
                </div>

                <div className="stat border-l border-[#1C2028] px-6 py-5">
                    <div className="stat-title text-xs text-[#92949B]">
                        Minutes
                    </div>
                    <div className="stat-value text-4xl leading-[1.2] text-white">
                        {totalDuration}
                    </div>
                </div>

                <div className="stat border-l border-[#1C2028] px-6 py-5">
                    <div className="stat-title text-xs text-[#92949B]">
                        Calories
                    </div>
                    <div className="stat-value text-4xl leading-[1.2] text-white">
                        {totalCalories}
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-wrap items-center gap-4">
                <div className="flex h-10 items-center rounded-xl border border-[#222630] bg-[#15171D] p-1">
                    <button
                        type="button"
                        onClick={() => setActiveTab("Today’s Plan")}
                        className={`h-8 rounded-lg px-5 text-xs transition ${
                            activeTab === "Today’s Plan"
                                ? "bg-[#20242D] text-white"
                                : "text-[#92949B] hover:text-white"
                        }`}
                    >
                        Today’s Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("Saved")}
                        className={`h-8 rounded-lg px-5 text-xs font-semibold transition ${
                            activeTab === "Saved"
                                ? "bg-[#20242D] text-white"
                                : "text-[#92949B] hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <span className="text-xs text-[#92949B]">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as "Duration" | "Calories" | "Rating"
                            )
                        }
                        className="h-9 min-h-0 w-28 rounded-xl border border-[#222630] bg-[#13161C] px-3 text-xs text-white outline-none"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="w-full">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default MyPlan;
