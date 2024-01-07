import Link from "next/link";

export default function NavigationLink(props) {
  return (
    <Link href={props.to}>
      <div className="border-solid p-2 border-2 rounded-lg border-transparent hover:border-slate-800 transition ease-in-out">
        <p className="font-bold">{props.title}</p>
      </div>
    </Link>
  );
}
