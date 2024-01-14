import ProjectPreviewTempory from "../components/ProjectPreviewTempory";
import ProjectPreviewNexory from "../components/ProjectPreviewNexory";
import ProjectPreviews from "../components/ProjectPreviews";

export const metadata = {
  title: "Projects | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Projects() {
  return (
    <ProjectPreviews>
      <ProjectPreviewTempory />
      <ProjectPreviewNexory />
    </ProjectPreviews>
  );
}
