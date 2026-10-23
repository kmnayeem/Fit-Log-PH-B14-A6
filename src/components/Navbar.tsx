'use client';

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useWOContext } from "@/context/WOContext";

const Navbar = () => {
  const { buildList, wishList } = useWOContext();

  const navLinks = (
    <>
      <li>
        <NavLinks href="/">Workouts</NavLinks>
      </li>
      <li>
        <NavLinks href="/myplan">My Plan</NavLinks>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0C0D10]/95 text-white backdrop-blur-xl after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gradient-to-r after:from-transparent after:via-[#C2F10D]/60 after:to-transparent">
      <div className="navbar mx-auto min-h-[70px] w-full max-w-[1504px] px-4 sm:px-6 md:px-8 xl:px-10">

        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-[#1C2128] p-2 shadow-xl"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            href="/"
            className="btn btn-ghost flex cursor-pointer items-center gap-2 text-white hover:bg-transparent hover:text-white"
          >
            <Image
              src={logo}
              alt="FitLog logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />

            <span className="text-xl font-bold">FITLOG</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-4 bg-transparent px-1 text-sm">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-3 sm:gap-6">

          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm font-medium text-[#C7CBD1] transition hover:text-white sm:gap-3 sm:text-base"
          >
            <span>Plan</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C2F10D] text-sm font-bold text-black">
              {buildList.length}
            </span>
          </Link>

          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm font-medium text-[#A0A6B1] transition hover:text-white sm:gap-3 sm:text-base"
          >
            <span>Saved</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#2B303A] text-sm font-medium text-[#D1D5DB]">
              {wishList.length}
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
