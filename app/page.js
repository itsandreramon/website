import NavigationLink from "./components/NavigationLink";
import Link from "next/link";

export default function Home() {
  return (
      <div className="max-w-xl">
        <p className="text-4xl text-slate-500 pb-8">Hi, I'm André, currently working at <span className="font-bold text-gray-400">SAP</span> as an <span className="font-bold text-gray-400">Android Developer</span>.</p>
        <Link href="/about">
          <button className="border-gray-800 p-2 border-2 rounded-lg hover:border-white transition ease-in-out">
            <p className="p-2">Learn more</p>
          </button>
        </Link>
      </div>
  );
}
