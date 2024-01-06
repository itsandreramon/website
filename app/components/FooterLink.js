import Link from "next/link";

export default function FooterLink(props) {
  return (
    <Link href="/">
      <p className="text-sm font-bold hover:underline">{props.title}</p>
    </Link>
  );
}
