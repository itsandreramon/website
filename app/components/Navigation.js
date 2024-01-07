"use client";

import React, { useState } from "react";
import NavigationLink from "./NavigationLink";

export default function Navigation({ children }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="lg:p-24 p-8 border-b border-gray-800">
      <div className="flex flex-row items-center lg:visible invisible">
        <div className="basis-1/4">
          <p className="font-bold">André Thiele</p>
          <p className="font-bold text-slate-500">Android Developer</p>
        </div>

        <div className="basis-3/4 flex flex-row justify-end space-x-12">
          <NavigationLink title="Blog" />
          <NavigationLink title="Work" />
          <NavigationLink title="Contact" />
        </div>
      </div>
      <div class="lg:hidden visible">
        <button className="border-gray-800 border-solid p-2 border-2 rounded-lg">
          Menu
        </button>
      </div>
    </div>
  );
}
