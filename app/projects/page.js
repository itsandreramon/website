import ProjectPreview from "../components/ProjectPreview";

export const metadata = {
  title: "Projects | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl text-justify mx-auto">
      <div className="flex flex-row flex-wrap gap-12">
        <ProjectPreview title="Tempory" to="/projects/tempory" />
        <ProjectPreview title="Tempory" to="/projects/tempory" />
      </div>
    </div>
  );
}
