import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.to}>
      <button className="hover:border-white border-slate-800 p-4 border-2 rounded-lg transition ease-in-out">
        <div className="flex flex-row items-center gap-2">
          <p>{props.title}</p>
          {props.icon}
        </div>
      </button>
    </Link>
  );
}
