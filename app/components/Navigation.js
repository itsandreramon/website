"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import NavigationLinkMobile from "./NavigationLinkMobile";
import Link from "next/link";
import Socials from "./Socials";

export default function Navigation() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      {/* "Desktop Nav" */}
      <div className="lg:block hidden border-b border-gray-800 fixed bg-black w-full">
        <div className="flex flex-row items-center px-8 lg:h-32">
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
      </div>

      {/* "Mobile Nav" */}
      <div className="border-b border-gray-800 lg:hidden visible fixed w-full bg-black">
        <div className="flex flex-row items-center h-16">
        <button
          className="mx-8 border-gray-800 items-center border-solid p-2 border-2 rounded-lg"
          onClick={() => setExpanded(!isExpanded)}
        >
          Menu
        </button>
        </div>
        <div
          className={`${isExpanded ? "visible border-b border-gray-800" : "hidden "} px-8`}
        >
          <ul className="py-4">
            <li>
              <NavigationLinkMobile to="/about" title="About" />
            </li>
            <li>
              <NavigationLinkMobile to="/projects" title="Projects" />
            </li>
            <li>
              <NavigationLinkMobile to="/blog" title="Blog" />
            </li>
            <li>
              <NavigationLinkMobile to="/contact" title="Contact" />
            </li>
          </ul>
          <div className="border-t border-gray-800 w-48" />
          <div className="my-8 max-w-fit">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
