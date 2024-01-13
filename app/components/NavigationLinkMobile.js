import Link from "next/link";

export default function NavigationLinkMobile(props) {
  return (
    <Link href={props.to}>
      <div className="text-gray-400 py-2">
        <p className="text-gray-400 py-2font-bold">{props.title}</p>
      </div>
    </Link>
  );
}
