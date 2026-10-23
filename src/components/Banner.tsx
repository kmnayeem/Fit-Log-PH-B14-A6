import React from "react";
import Image from "next/image";
import bannerLogo from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto mt-6 rounded-xl bg-[#15171D] text-white">
      <div className="grid min-h-[370px] grid-cols-1 items-center gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_300px] md:gap-10 md:px-8 lg:grid-cols-[1fr_320px]">
        <div className="order-2 md:order-1">
          <p className="mb-5 text-[10px] font-extrabold uppercase tracking-wider text-[#C2F800]">
            Workout Library
          </p>

          <h1 className="font-oswald text-[38px] font-bold uppercase leading-[0.98] tracking-tight sm:text-5xl md:text-[54px]">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-4 max-w-[440px] text-sm leading-[21px] text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            type="button"
            className="mt-6 rounded-md bg-[#C2F800] px-5 py-[11px] text-[10px] font-extrabold uppercase text-black transition-colors hover:bg-[#B0E600]"
          >
            Browse Workouts
          </button>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
          <Image
            src={bannerLogo}
            alt="Anatomical athlete exercising on gym equipment"
            priority
            sizes="(max-width: 767px) 260px, (max-width: 1023px) 300px, 320px"
            className="h-[220px] w-full max-w-[260px] object-contain sm:h-[250px] md:h-[290px] md:max-w-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
