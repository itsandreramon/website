import Image from "next/image";
import login from "../../../public/projects/tempory/login.png";
import route from "../../../public/projects/tempory/route.png";
import customer from "../../../public/projects/tempory/customer.png";
import customers from "../../../public/projects/tempory/customers.png";

export const metadata = {
  title: "Tempory | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Home() {
  return (
    <div className="text-justify mx-auto">
      <p className="text-4xl font-bold text-slate-400 pb-8 text-center">
        Tempory
      </p>
      <Image src={login} />
      <Image src={route} />
      <Image src={customer} />
      <Image src={customers} />
    </div>
  );
}
