"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function ProjectPreview(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={props.to}>
      <div
        className="h-32 sm:h-64 w-64 sm:w-96 relative -z-10"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="absolute overflow-hidden rounded-2xl relative">
          <Image
            src={props.src}
            alt=""
            placeholder="blur"
            quality={100}
            className={`${isHovered ? "lg:scale-125 lg:grayscale-0 blur-none" : "lg:scale-110 lg:blur-sm"} grayscale h-32 sm:h-64 w-64 sm:w-96 relative object-cover transition brightness-50 duration-500`}
          />
        </div>
        <p className="text-white -mb-8 text-2xl w-full text-center font-bold absolute inset-y-2/4 -translate-y-2/4 duration-500">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
