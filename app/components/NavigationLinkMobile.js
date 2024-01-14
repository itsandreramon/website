import Link from "next/link";

export default function NavigationLinkMobile(props) {
  return (
    <Link href={props.to} onClick={props.onClick}>
      <div className="py-2 text-right">
        <p className="font-bold text-2xl">{props.title}</p>
      </div>
    </Link>
  );
}
