import ButtonMail from "../components/ButtonMail";

export const metadata = {
  title: "Contact | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Contact() {
  return (
    <div className="max-w-xl">
      <p className="text-4xl text-slate-400 py-12">
        Want to talk about a project? I am{" "}
        <span className="font-bold text-white">available</span> for{" "}
        <span className="font-bold text-white">freelance work</span>.
      </p>
      <ButtonMail />
    </div>
  );
}
