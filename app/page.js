import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="mx-24 max-w-min">
        <p className="text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Content
        </p>
      </div>
      <Footer />
    </main>
  );
}
