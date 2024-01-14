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
        <div className="flex flex-row items-center px-8 lg:h-32 lg:px-24">
          <div className="grow">
            <Link href="/">
              <div className="flex flex-col">
                <p className="font-bold">André Thiele</p>
                <p className="text-slate-500">
                  Building digital experiences with attention to every detail.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row justify-end space-x-12">
            <NavigationLink title="About" to="/about" />
            <NavigationLink title="Projects" to="/projects" />
            <NavigationLink title="Blog" to="/blog" />
            <NavigationLink title="Contact" to="/contact" />
            <Socials />
          </div>
        </div>
      </div>
      {/* "Mobile Nav" */}
      <div className="border-b border-gray-800 lg:hidden visible fixed w-full bg-black z-10">
        <div className="flex flex-row items-center h-16 mx-8">
          <Link href="/" className="grow" onClick={() => setExpanded(false)}>
            <p className="font-bold">André Thiele</p>
          </Link>
          <button
            className="border-gray-800 items-center border-solid p-2 border-2 rounded-lg"
            onClick={() => setExpanded(!isExpanded)}
          >
            Menu
          </button>
        </div>
        <div className={`${isExpanded ? "visible" : "hidden "} px-8`}>
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
                to="/projects"
                title="Projects"
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
