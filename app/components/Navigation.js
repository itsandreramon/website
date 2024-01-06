import Link from "next/link";
import NavigationLink from "./NavigationLink";

export default function Navigation({ children }) {
  return (
    <div className="flex flex-row items-center p-24">
      <div className="basis-1/4">
        <p className="font-bold">André Thiele</p>
        <p className="font-bold text-slate-500">Android Developer</p>
      </div>

      <div className="basis-3/4 flex flex-row justify-end space-x-12">
        <NavigationLink title="Blog" />
        <NavigationLink title="Work" />
        <NavigationLink title="Contact" />
      </div>
    </div>
  );
}
