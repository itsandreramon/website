import Link from "next/link";
import { AtSign, Mail } from "react-feather";

export default function ButtonMail() {
  return (
    <a
      data-mce-href="mailto:mail.andreramon@gmail.com"
      href="mailto:mail.andreramon@gmail.com"
    >
      <button className="hover:border-white border-slate-800 p-4 border-2 rounded-lg transition ease-in-out">
        <div className="flex flex-row items-center gap-2">
          <Mail />
          <p>Contact</p>
        </div>
      </button>
    </a>
  );
}
