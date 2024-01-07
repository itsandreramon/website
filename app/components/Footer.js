import FooterLink from "./FooterLink";
import FooterLinkOutgoing from "./FooterLinkOutgoing";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="lg:p-24 p-8 border-t border-gray-800">
      <div className="flex flex-row justify-between">
        <div className="pr-48">
          <p className="text-sm font-bold text-gray-500 pb-4">connect</p>
          <Socials/>
        </div>
        <div className="grow">
          <p className="text-sm font-bold text-gray-500 pb-4">other</p>
          <ul>
            <li>
              <FooterLink to="/privacy" title="Privacy" />
            </li>
          </ul>
        </div>
      </div>
      <div className="font-mono text-xs text-slate-500 pt-16">
        <p> Built in Berlin with Next.js</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </div>
  );
}
