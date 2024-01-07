import Link from "next/link";

export default function BlogEntry(props) {
  return (
    <Link href="">
        <div className="border-slate-800 p-4 border-2 rounded-lg hover:border-white transition ease-in-out">
        <p>{props.title}</p>
        <p className="text-xs text-slate-500">{props.year}</p>
        </div>
    </Link>
  );
}
