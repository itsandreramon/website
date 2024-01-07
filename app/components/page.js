import Header from "./Header";
import Subtitle from "./Subtitle";

export default function Home() {
  return (
    <div className="lg:mx-24 mx-8">
      <Header title="Welcome" />
      <Subtitle title="I'm André, currently working at SAP as an Android Developer." />
    </div>
  );
}
