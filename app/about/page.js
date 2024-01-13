export const metadata = {
  title: "About | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl text-justify">
      <p className="text-4xl font-bold pb-8">
        About
      </p>

      <p className="text-2xl text-slate-400">
        I am currently an <span className="font-bold text-white">SAP Early Talent</span> and full-time <span className="font-bold text-white">Android Developer</span> working on the mobile refresh of{" "}
        <a href="https://play.google.com/store/apps/details?id=com.sap.ariba.ibx">
          SAP Ariba Shopping
        </a>
        .
      </p>

      <p>
        
      </p>
    </div>
  );
}
