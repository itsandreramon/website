import { ChevronsRight } from "react-feather";
import Button from "./components/Button";
import Image from "next/image";
import avatar from "../public/avatar.jpg";

export default function Home() {
  return (
    <div className="max-w-xl">
      <Image
        src={avatar}
        height="200"
        width="200"
        placeholder="blur"
        style={{ borderRadius: "50%" }}
      />
      <p className="text-4xl text-slate-400 py-12">
        Hi, I'm André, currently working at{" "}
        <span className="font-bold text-white">SAP</span> as an{" "}
        <span className="font-bold text-white">Android Developer</span>.
      </p>
      <Button to="/about" title="Learn more" icon={<ChevronsRight />} />
    </div>
  );
}
