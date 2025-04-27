"use client"

import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-3 md:py-4 bg-white border-b relative">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-6 h-6 sm:w-8 sm:h-7 md:w-10 md:h-8"
        />
        <div className="hidden sm:block text-lg md:text-xl lg:text-2xl font-bold text-gray-800 whitespace-nowrap">
          WhatBytes
        </div>
      </div>

      {/* Right: Profile Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Profile Info*/}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 border rounded-md p-1 sm:p-1.5 md:p-2">
          <img
            src="/images/profile.jpeg"
            alt="User Profile"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover"
          />
          <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap">
            Rahil Siddique
          </div>
        </div>

        {/* Dropdown Toggle Button  */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none pt-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu -*/}
      {menuOpen && (
        <div className="absolute right-4 top-full mt-2 w-40 bg-white border rounded-md shadow-md z-20 block lg:hidden">
          <a
            href="/dashboard"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            Dashboard
          </a>
          <a
            href="/dashboard/skill-test"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            Skill Test
          </a>
          <a
            href="/dashboard/internship"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            Internship
          </a>
        </div>
      )}
    </div>
  );
}