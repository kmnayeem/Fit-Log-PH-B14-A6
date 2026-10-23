"use client";

import { useWOContext } from '@/context/WOContext';
import { IWorkout } from '@/Types/work.type';
import React from 'react';
import toast from 'react-hot-toast';

const DetailsPageButton = ({work}:{work : IWorkout}) => {
    const { buildList, wishList, setBuildList, setWishList } = useWOContext();
    const isBuildFull = buildList.length >= 5;
    const alreadyInbuild = buildList.some(item => item.id === work.id);
    const alreadyInWish = wishList.some(item => item.id === work.id);

    const handleAddToPlan = () =>
    {
        if(alreadyInbuild)
        {
            toast.error("Already in plan");
            return;
        }
        if(isBuildFull)
        {
            toast.error("Plan full");
            return;
        }
        setBuildList(prev => [...prev, work]);
        toast.success("Added to plan");
    };

    const handleSaveForLater = () =>
    {
        if(alreadyInWish)
        {
            toast.error("Already saved");
            return;
        }
        setWishList(prev => [...prev, work]);
        toast.success("Added to Saved");
    };

    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <button
                type="button"
                onClick={handleAddToPlan}
                disabled={alreadyInbuild || isBuildFull}
                className="rounded-lg bg-[#CCFF00] px-5 py-3 text-xs font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-[#b8e600] active:bg-[#a3cc00] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSaveForLater}
                disabled={alreadyInWish}
                className="rounded-lg border border-[#374151] px-5 py-3 text-xs text-white cursor-pointer transition-colors duration-200 hover:bg-[#374151] hover:border-[#6B7280] active:bg-[#1F2937] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Save for later
            </button>
        </div>
    );
};

export default DetailsPageButton;