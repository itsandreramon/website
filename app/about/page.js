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
    <div className="max-w-4xl ftext-justify mx-auto">
      <p className="text-4xl font-bold text-slate-400 pb-8 text-center">
        About
      </p>
      <p>
        I am currently an SAP Early Talent and full-time Android Developer
        working on the mobile refresh of{" "}
        <a href="https://play.google.com/store/apps/details?id=com.sap.ariba.ibx">
          SAP Ariba Shopping
        </a>
        . Before starting to work as a developer full-time in 2022, I studied
        Computer Science at the University of Applied Sciences Brandenburg,
        Germany in 2017. While technically still studying, I put my studies on
        hold until I start writing my thesis for my Masters degree in Computer
        Science in the middle of 2024. Having the flexibility to request limited
        part-time at SAP is really great, which allows me finish my studies
        while being guaranteed to be promoted to full-time again after a set
        amount of time.
      </p>
    </div>
  );
}
