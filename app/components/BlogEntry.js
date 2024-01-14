import Link from "next/link";

export default function BlogEntry(props) {
  return (
    <Link href={props.to}>
      <div className="font-mono border-slate-800 p-8 border-2 rounded-lg hover:border-white transition ease-in-out">
        <p>{props.title}</p>
        <p className="text-xs text-slate-500">{props.year}</p>
      </div>
    </Link>
  );
}
