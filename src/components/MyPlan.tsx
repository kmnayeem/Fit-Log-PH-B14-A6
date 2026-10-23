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
        if (orderId.includes(id)) return;

        setOrderId((prev) => [...prev, id]);
        setBuildList((prev) => prev.filter((item) => item.id !== id));

        toast.success('Workout completed!');
    };

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <div className="flex h-[210px] w-full items-center justify-center border-b border-[#1A1A1A] bg-[#111317] text-center">
                    <div>
                        <h3 className="mb-1 text-[16px] font-extrabold leading-5 text-white">
                            NOTHING HERE YET
                        </h3>

                        <p className="mb-[17px] text-[9px] leading-[13px] text-[#92949B]">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex h-[27px] min-w-[97px] items-center justify-center rounded-full bg-[#C2F10D] px-[18px] text-[9px] font-semibold text-black transition hover:bg-[#D4FF27]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-2">
                {sortedList.map((item) => (
                    <div
                        key={item.id}
                        className="flex min-h-[72px] w-full items-center gap-2 rounded-[10px] border border-[#222630] bg-[#15171D] px-2 py-1.5"
                    >
                        <Link
                            href={`/workouts/${item.id}`}
                            className="relative h-[56px] w-[104px] shrink-0 overflow-hidden rounded-md"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="104px"
                                className="object-cover"
                            />
                        </Link>

                        <div className="min-w-0 flex-1">
                            <h2 className="truncate text-[11px] font-extrabold uppercase leading-[15px] text-white">
                                {item.name}
                            </h2>

                            <p className="truncate text-[9px] leading-[13px] text-[#92949B]">
                                {item.equipment}
                            </p>

                            <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[9px] leading-3 text-[#A1A4AD]">
                                <span className="flex items-center gap-1 whitespace-nowrap">
                                    <FaRegClock className="text-[#C2F800]" />
                                    {item.duration} min
                                </span>

                                <span className="flex items-center gap-1 whitespace-nowrap">
                                    <FaFire className="text-[#C2F800]" />
                                    {item.caloriesBurned} kcal
                                </span>

                                <span className="flex items-center gap-1 whitespace-nowrap">
                                    <FaRegStar className="text-[#C2F800]" />
                                    {item.rating}
                                </span>
                            </div>
                        </div>

                        <Link
                            href={`/workouts/${item.id}`}
                            className="hidden h-[25px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-[#303541] px-3 text-[8px] text-white transition hover:bg-[#252832] sm:inline-flex"
                        >
                            View Details
                        </Link>

                        {activeTab === "Today’s Plan" && (
                            <button
                                type="button"
                                onClick={() => handleComplete(item.id)}
                                disabled={orderId.includes(item.id)}
                                className="inline-flex h-[25px] shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#C2F10D] px-3 text-[8px] font-bold text-black transition hover:bg-[#D4FF27] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <FaCheck size={8} />
                                Mark as Done
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            aria-label={`Remove ${item.name}`}
                            title="Remove workout"
                            className="shrink-0 cursor-pointer p-1 text-[#777B86] transition hover:text-white"
                        >
                            <FaTimes size={10} />
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <div className="stats stats-vertical w-full shadow sm:stats-horizontal">
                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-[#CCFF00]">{totalPlan}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{totalDuration}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{totalCalories}</div>
                </div>
            </div>

            <div className="tabs tabs-box w-full flex-wrap">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Today’s Plan"
                    checked={activeTab === "Today’s Plan"}
                    onChange={() => setActiveTab("Today’s Plan")}
                />

                <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                    {activeTab === "Today’s Plan" && renderTabContent()}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved"
                    checked={activeTab === "Saved"}
                    onChange={() => setActiveTab("Saved")}
                />

                <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                    {activeTab === "Saved" && renderTabContent()}
                </div>

                <div className="ms-auto flex items-center gap-3">
                    <span className="text-sm text-base-content/60">Sort By</span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
                        }
                        className="select select-bordered select-sm h-10 min-h-0 w-32 rounded-2xl border-base-300 bg-base-100 px-3 text-sm"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;
