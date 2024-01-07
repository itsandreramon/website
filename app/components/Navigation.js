"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import NavigationLinkMobile from "./NavigationLinkMobile";
import Link from "next/link";
import Socials from "./Socials";

export default function Navigation({ children }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="lg:p-24 p-8 border-b border-gray-800">
      {/* "Desktop Nav" */}
      <div className="flex flex-row items-center lg:visible invisible space-x-12">
        <div className="basis-1/2">
          <p className="font-bold">André Thiele</p>
          <p className="font-bold text-slate-500">Android Developer</p>
        </div>

        <div className="basis-1/2 flex flex-row justify-end space-x-12">
          <NavigationLink title="Blog" />
          <NavigationLink title="Work" />
          <NavigationLink title="Contact" />
          <Socials />
        </div>
      </div>

      {/* "Mobile Nav" */}
      <div class="lg:hidden visible">
        <button
          className="border-gray-800 border-solid p-2 border-2 rounded-lg"
          onClick={() => setExpanded(!isExpanded)}
        >
          Menu
        </button>
        <div className={`${isExpanded ? "visible" : "hidden"}`}>
          <ul className="py-4">
            <li>
              <NavigationLinkMobile title="Blog" />
            </li>
            <li>
              <NavigationLinkMobile title="Work" />
            </li>
            <li>
              <NavigationLinkMobile title="Contact" />
            </li>
          </ul>

          <div className="border-t border-gray-800 w-48 pb-8"></div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
