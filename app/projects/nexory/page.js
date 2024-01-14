import Image from "next/image";
import home from "../../../public/projects/nexory/home.png";
import ProjectPreviewTempory from "@/app/components/ProjectPreviewTempory";
import MoreProjects from "@/app/components/MoreProjects";

export const metadata = {
  title: "Nexory | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Nexory() {
  return (
    <div className="max-w-4xl ftext-justify mx-auto">
      <p className="text-4xl font-bold text-slate-400 pb-8 text-center">
        Nexory
      </p>
      <Image src={home} />
      <MoreProjects>
        <ProjectPreviewTempory />
      </MoreProjects>
    </div>
  );
}
