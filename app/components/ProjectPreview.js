import Link from "next/link";
import Image from "next/image";
import tempory from "../../public/project-tempory.jpg";

export default function ProjectPreview(props) {
  return (
    <Link href={props.title}>
      <div className="h-64 w-96 relative">
        <div className="absolute overflow-hidden rounded-2xl relative">
          <Image
            src={tempory}
            className="h-64 w-full object-cover grayscale brightness-50 hover:scale-105 hover:grayscale-0 transition"
          />
        </div>
        <p className="text-2xl font-bold bg-red-400 absolute inset-y-2/4 inset-x-2/4 -translate-y-2/4 -translate-x-2/4">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
