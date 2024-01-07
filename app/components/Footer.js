import FooterLink from "./FooterLink";
import FooterLinkOutgoing from "./FooterLinkOutgoing";

export default function Footer() {
  return (
    <div className="lg:p-24 p-8 border-t border-gray-800">
      <div className="flex flex-row justify-between">
        <div className="pr-48">
          <p className="text-sm font-bold text-gray-500">connect</p>
          <ul>
            <li>
              <FooterLinkOutgoing
                to="https://github.com/itsandreramon"
                title="GitHub"
              />
            </li>
            <li>
              <FooterLinkOutgoing
                to="https://www.linkedin.com/in/itsandreramon"
                title="LinkedIn"
              />
            </li>
          </ul>
        </div>
        <div className="grow">
          <p className="text-sm font-bold text-gray-500">other</p>
          <ul>
            <li>
              <FooterLink to="/privacy" title="Privacy" />
            </li>
          </ul>
        </div>
      </div>
      <div className="font-mono text-xs text-slate-500 pt-16">
        <p> Made in Berlin with Next.js</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </div>
  );
}
