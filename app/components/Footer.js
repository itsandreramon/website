import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <div className="lg:p-24 p-8 border-t border-gray-800">
      <div className="flex flex-row justify-between">
        <div className="basis-1/2">
          <p className="text-sm font-bold text-gray-500">connect</p>
          <ul>
            <li>
              <FooterLink title="GitHub" />
            </li>
            <li>
              <FooterLink title="LinkedIn" />
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <p className="text-sm font-bold text-gray-500">other</p>
          <ul>
            <li>
              <FooterLink title="Imprint" />
            </li>
            <li>
              <FooterLink title="Privacy" />
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-16">
        <p className="text-xs font-mono text-slate-500">Made in Berlin</p>
        <p className="text-xs font-mono text-slate-500">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </div>
  );
}
