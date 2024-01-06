import Link from "next/link";

export default function NavigationLink(props) {
  return (
    <Link href="/">
      <div className="hover:text-gray-400 border-solid p-2 border-2 rounded-lg border-transparent hover:border-gray-400 transition ease-in-out">
        <a className="font-bold">{props.title}</a>
      </div>
    </Link>
  );
}
