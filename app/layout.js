import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          {"Add Navigation height as top margin"}
          <div className="grow lg:p-24 p-8 lg:mt-32 mt-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
