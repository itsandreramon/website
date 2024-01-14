export const metadata = {
  title: "Projects | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function ProjectPreviews({ children }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-12 lg:flex-row">{children}</div>
    </div>
  );
}
