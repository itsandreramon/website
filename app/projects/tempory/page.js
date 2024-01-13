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
    <div className="max-w-4xl ftext-justify mx-auto">
      <p className="text-4xl font-bold text-slate-400 pb-8 text-center">
        Tempory
      </p>
    </div>
  );
}
