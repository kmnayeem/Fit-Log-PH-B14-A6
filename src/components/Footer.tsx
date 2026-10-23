import React from "react";
import Image from "next/image";
import logo from "@/assets/Vector.png";

const Footer = () => {
    return (
        <footer className="mt-8 flex min-h-28 items-center justify-between bg-[#0C0D10] px-6 py-8 text-white sm:px-8 lg:px-10">
            <div className="flex items-center gap-2">
                <Image
                    src={logo}
                    alt="FITLOG Logo"
                    className="h-3.5 w-auto object-contain"
                    priority
                />

                <span className="font-oswald text-sm font-bold tracking-wide text-white">
                    FITLOG
                </span>
            </div>

            <p className="text-right font-inter text-[10px] text-[#6B7280] sm:text-[11px]">
                © FitLog — Workout Library. Train hard, log honest.
            </p>
        </footer>
    );
};

export default Footer;
