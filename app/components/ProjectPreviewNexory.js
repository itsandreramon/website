"use client";

import tempory from "../../public/projects/nexory/preview.jpg";
import ProjectPreview from "./ProjectPreview";
import React, { useState } from "react";

export default function ProjectPreviewNexory(props) {
  return <ProjectPreview title="Nexory" to="/projects/nexory" src={tempory} />;
}
