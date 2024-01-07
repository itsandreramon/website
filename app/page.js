import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Subtitle from "./components/Subtitle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="lg:mx-24 mx-8">
        <Header title="Welcome" />
        <Subtitle title="I'm André, currently working at SAP as an Android Developer." />
      </div>
      <Footer />
    </main>
  );
}
