import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navLinks = <>
    <li><NavLinks href={'/'}>
      Workouts
    </NavLinks></li>
    <li><NavLinks href={'/myplan'}>
      My Plan
    </NavLinks></li>
  </>

  return (
    <header className="w-full bg-[#1C2128] text-white">
      <div className="navbar mx-auto min-h-[62px] w-full max-w-[1504px] px-4 sm:px-6 md:px-8 xl:px-10">
        <div className="navbar-start gap-1">
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

          <a href="/" className="flex items-center gap-1">
            <Image
              src={logo}
              alt="FitLog logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />

            <span className="btn btn-ghost btn-sm text-xl font-bold">
              FITLOG
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1 text-sm">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          <button
            type="button"
            className="btn btn-sm border border-[#292D35] bg-[#191D24] px-4 text-white hover:bg-[#292D35]"
          >
            Button
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;