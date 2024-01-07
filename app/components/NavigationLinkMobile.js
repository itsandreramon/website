import Link from "next/link";

export default function NavigationLinkMobile(props) {
  return (
    <Link href="/">
      <div className="text-gray-400 py-2">
        <a className="font-bold">{props.title}</a>
      </div>
    </Link>
  );
}
