import Header from "./components/Header";
import Subtitle from "./components/Subtitle";

export const metadata = {
  title: "404 | André Thiele",
};

export default function Error() {
  return (
    <div>
      <Header title="404" />
      <Subtitle title="This page could not be found." />
    </div>
  );
}
