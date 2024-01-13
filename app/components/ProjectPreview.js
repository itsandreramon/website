"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import tempory from "../../public/project-tempory-min.jpg";

export default function ProjectPreview(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={props.to}>
      <div
        className="h-64 w-96 relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="absolute overflow-hidden rounded-2xl relative">
          <Image
            src={tempory}
            alt=""
            quality={50}
            className={`${isHovered ? "scale-105 grayscale-0" : "grayscale"} h-64 w-full relative object-cover transition brightness-50`}
          />
        </div>
        <p className="-mb-8 text-2xl w-full text-center font-bold absolute inset-y-2/4 -translate-y-2/4">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
