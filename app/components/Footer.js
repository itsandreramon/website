export default function Footer({ children }) {
  return (
    <div className="p-24">
      <div className="flex flex-row justify-between">
        <div className="basis-1/2">
          <p className="text-xs font-bold text-slate-500">connect</p>
          <ul>
            <li>
              <a className="text-sm font-bold hover:underline">github</a>
            </li>
            <li>
              <a className="text-sm font-bold hover:underline">linkedin</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <p className="text-xs font-bold text-slate-500">other</p>
          <ul>
            <li>
              <a className="text-sm font-bold hover:underline">imprint</a>
            </li>
            <li>
              <a className="text-sm font-bold hover:underline">privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs pt-16 font-mono text-slate-500">
        Copyright © 2024 - All rights reserved
      </p>
    </div>
  );
}
