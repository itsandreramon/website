"use client";

import tempory from "../../public/projects/tempory/preview.jpg";
import ProjectPreview from "./ProjectPreview";
import React, { useState } from "react";

export default function ProjectPreviewTempory(props) {
  return (
    <ProjectPreview title="Tempory" to="/projects/tempory" src={tempory} />
  );
}
