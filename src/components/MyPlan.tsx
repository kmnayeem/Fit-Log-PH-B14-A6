
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

    const totalPlan = currentList.length;
    const totalDuration = currentList.reduce((sum, item) => sum + item.duration,0);
    const totalCalories = currentList.reduce((sum, item) => sum + item.caloriesBurned,0);
    

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
            )
        }
        return (
            <div>
                {sortedList.map((item) => (
                        <h2 key = {item.id}>helllooooo</h2>
                ))}
            </div>
        )
    }

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

            {/* Tabs */}
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
                    {renderTabContent()}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("Saved")}
                />
                <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                    {renderTabContent()}
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
