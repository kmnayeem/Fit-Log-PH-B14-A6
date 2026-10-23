"use client";
import { useWOContext } from '@/context/WOContext';
import Link from 'next/link';
import React from 'react';

const DetailsPageButton = () => {
    const { buildList, wishList, setBuildList, setWishList } = useWOContext();
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href="/workouts"
                className="rounded-lg bg-[#CCFF00] px-5 py-3 text-xs font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-[#b8e600] active:bg-[#a3cc00]"
            >
                Add to today&apos;s plan
            </Link>

            <Link
                href="/workouts"
                className="rounded-lg border border-[#374151] px-5 py-3 text-xs text-white cursor-pointer transition-colors duration-200 hover:bg-[#374151] hover:border-[#6B7280] active:bg-[#1F2937]"
            >
                Save for later
            </Link>
        </div>
    );
};

export default DetailsPageButton;