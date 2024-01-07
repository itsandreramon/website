"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import NavigationLinkMobile from "./NavigationLinkMobile";
import Link from "next/link";
import Socials from "./Socials";

export default function Navigation() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="lg:p-24 p-8 border-b border-gray-800">
      {/* "Desktop Nav" */}
      <div className="flex flex-row items-center lg:visible invisible space-x-12">
        <div className="basis-1/4">
          <Link href="/">
            <p className="font-bold">André Thiele</p>
          </Link>
        </div>

        <div className="basis-3/4 flex flex-row justify-end space-x-12">
          <NavigationLink title="About" to="/about" />
          <NavigationLink title="Projects" to="/projects" />
          <NavigationLink title="Blog" to="/blog" />
          <NavigationLink title="Contact" to="/contact" />
          <Socials />
        </div>
      </div>

      {/* "Mobile Nav" */}
      <div className="lg:hidden visible">
        <button
          className="border-gray-800 border-solid p-2 border-2 rounded-lg"
          onClick={() => setExpanded(!isExpanded)}
        >
          Menu
        </button>
        <div className={`${isExpanded ? "visible" : "hidden"}`}>
          <ul className="py-4">
            <li>
              <NavigationLinkMobile title="About" />
            </li>
            <li>
              <NavigationLinkMobile title="Projects" />
            </li>
            <li>
              <NavigationLinkMobile title="Blog" />
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
