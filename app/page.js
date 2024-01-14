import { ChevronsRight } from "react-feather";
import Button from "./components/Button";
import Image from "next/image";
import avatar from "../public/avatar.jpg";

export const metadata = {
  title: "Home | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Home() {
  return (
    <div className="h-full">
      <Image
        src={avatar}
        alt=""
        height="200"
        width="200"
        placeholder="blur"
        style={{ borderRadius: "50%" }}
      />
      <div className="max-w-xl">
        <p className="text-4xl text-slate-400 py-12">
          Hi, I'm André Thiele, currently working at{" "}
          <span className="font-bold text-white">SAP</span> as an{" "}
          <span className="font-bold text-white">Android Developer</span>.
        </p>
      </div>
      <Button to="/about" title="Learn more" icon={<ChevronsRight />} />
    </div>
  );
}
