import moment, { now } from "moment";

export const metadata = {
  title: "About | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function About() {
  const today = moment();
  const age = today.diff(moment("1998-11-28"), "years");

  return (
    <div className="max-w-4xl">
      <p className="text-4xl font-bold pt-32 pb-8">About</p>
      <p className="text-2xl text-slate-400">
        I'm {age} years old and currently working at{" "}
        <span className="text-white">SAP</span> as a full-time{" "}
        <span className="text-white">Android Developer</span>. At the moment I am
        working on the mobile refresh of{" "}
        <a href="https://play.google.com/store/apps/details?id=com.sap.ariba.ibx">
          SAP Ariba Shopping
        </a>{" "}
        as part of thee Mobile Experience & Engineering team in{" "}
        <span className="text-white">Berlin</span>.
      </p>

      <p className="text-2xl text-slate-400 pt-8">
        At SAP, I am also part of the{" "}
        <span className="text-white">Early Talent Community</span> as well as
        the current MXE Android Developer{" "}
        <span className="text-white">Community Lead</span>.
      </p>

      <p className="text-2xl text-slate-400 pt-8">
        As a Community Lead, I'm responsible for{" "}
        <span className="text-white">organizing & managing</span>
        meetings where engineers from differet mobile teams at SAP come together
        to discuss the latest trends in Mobile & Android development.{" "}
      </p>

      <p className="text-2xl text-slate-400 pt-8">
        I'm currently on track to finish my Computer Science{" "}
        <span className="text-white">Masters</span> degree at the end of 2024 at
        the{" "}
        <span className="text-white">
          University of Applied Sciences Brandenburg
        </span>
        .
      </p>
    </div>
  );
}
