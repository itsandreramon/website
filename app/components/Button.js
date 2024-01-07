import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.to}>
      <button className="border-slate-800 p-4 border-2 rounded-lg hover:border-white transition ease-in-out">
        <div className="flex flex-row items-center">
          <p className="pr-2">{props.title}</p>
          {props.icon}
        </div>
      </button>
    </Link>
  );
}
