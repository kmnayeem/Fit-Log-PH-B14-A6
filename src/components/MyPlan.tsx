'use client';
import { useWOContext } from '@/context/WOContext';
import React, { useState } from 'react';

const MyPlan = () => {
    const { buildList, wishList, setBuildList, setWishList } = useWOContext();
    const [activeTab, setActiveTab] = useState<"Today’s Plan" | "Saved">("Today’s Plan");
    const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");
    const [orderId, setOrderId] = useState<number[]>([]);
    const currentList = activeTab === "Today’s Plan" ? buildList : wishList;
    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "Duration") return a.duration - b.duration;
        if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "Rating") return a.rating - b.rating;
        return 0;
    });

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <div className="h-[210px] w-full bg-[#111317] flex items-center justify-center text-center border-b border-[#1A1A1A]">
                    <div>
                        <h3 className="text-white text-[16px] font-extrabold leading-5 mb-1">
                            NOTHING HERE YET
                        </h3>

                        <p className="text-[#92949B] text-[9px] leading-[13px] mb-[17px]">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <button
                            onClick={() => { }}
                            className="h-[27px] min-w-[97px] px-[18px] rounded-full bg-[#C2F10D] text-black text-[9px] font-semibold cursor-pointer"
                        >
                            Go to workouts
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                {sortedList.map(item => (
                    <>
                    <h2>helllooooo</h2>
                    </>
                ))}
            </div>
        )
    }

    return (
        <div className="container mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <div className="stats stats-vertical w-full shadow sm:stats-horizontal">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box w-full flex-wrap" >
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Today’s Plan"
                    checked={activeTab === "Today’s Plan"}
                    onChange={() => setActiveTab("Today’s Plan")}
                />
                <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                    Tab content 1
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("Saved")}
                />
                <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                    Tab content 2
                </div>

                <div className="ms-auto flex items-center gap-3">
                    <span className="text-sm text-base-content/60">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")}
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
