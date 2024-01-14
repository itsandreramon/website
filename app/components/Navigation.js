"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import NavigationLinkMobile from "./NavigationLinkMobile";
import Link from "next/link";
import Socials from "./Socials";

export default function Navigation() {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div>
      {/* "Desktop Nav" */}
      <div className="fixed w-full lg:block hidden border-b border-gray-800 bg-black">
        <div className="flex flex-row items-center px-8 lg:h-32 lg:px-24">
          <div className="grow">
            <Link href="/">
              <p className="font-bold">André Thiele</p>
            </Link>
          </div>
          <div className="flex flex-row justify-end space-x-12">
            <NavigationLink title="About" to="/about" />
            <NavigationLink title="Work" to="/work" />
            <NavigationLink title="Blog" to="/blog" />
            <NavigationLink title="Contact" to="/contact" />
            <Socials />
          </div>
        </div>
      </div>
      {/* "Mobile Nav" */}
      <div className="border-b border-gray-800 lg:hidden visible fixed w-full bg-black">
        <div className="flex flex-row items-center h-16 mx-8">
          <Link
            href="/"
            className="grow z-10"
            onClick={() => setExpanded(false)}
          >
            <p className="font-bold">André Thiele</p>
          </Link>
          <button
            className="border-gray-800 items-center border-solid p-2 border-2 rounded-lg z-10 bg-black"
            onClick={() => setExpanded(!isExpanded)}
          >
            Menu
          </button>
        </div>
        <div
          className={`${isExpanded ? "translate-y-50 opacity-100" : "-translate-y-full opacity-0"} bg-black border-b border-gray-800 absolute w-full px-8 transition duration-500 ease-in-out`}
        >
          <ul className="py-4">
            <li>
              <NavigationLinkMobile
                to="/about"
                title="About"
                onClick={() => setExpanded(false)}
              />
            </li>
            <li>
              <NavigationLinkMobile
                to="/work"
                title="Work"
                onClick={() => setExpanded(false)}
              />
            </li>
            <li>
              <NavigationLinkMobile
                to="/blog"
                title="Blog"
                onClick={() => setExpanded(false)}
              />
            </li>
            <li>
              <NavigationLinkMobile
                to="/contact"
                title="Contact"
                onClick={() => setExpanded(false)}
              />
            </li>
          </ul>
          <div className="border-t border-gray-800 w-48 ms-auto" />
          <div className="my-8 max-w-fit ms-auto">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
