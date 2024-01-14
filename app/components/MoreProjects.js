import ProjectPreviewTempory from "./ProjectPreviewTempory";
import ProjectPreviewNexory from "./ProjectPreviewNexory";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import ProjectPreviews from "./ProjectPreviews";

export const metadata = {
  title: "Projects | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function MoreProjects({ children }) {
  return (
    <div>
      <Link href="/work">
        <div className="flex flex-row gap-4 h-24 items-center">
          <div className="border-solid border-slate-800 border-2 rounded-full p-2">
            <ArrowLeft className="text-white" />
          </div>
          <p className="font-bold text-white">More Projects</p>
        </div>
      </Link>
      <ProjectPreviews>{children}</ProjectPreviews>
    </div>
  );
}
