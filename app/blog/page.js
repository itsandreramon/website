import BlogEntry from "../components/BlogEntry";

export const metadata = {
  title: "Blog | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col space-y-8">
      <p className="text-4xl font-bold pb-8 text-center">Blog</p>
      <BlogEntry
        to="/blog/creating-and-managing-custom-scoped-components-in-dagger-anvil"
        title="Creating and managing custom-scoped components in Dagger/Anvil"
        year="2024"
      />
      <BlogEntry
        to="/blog/understanding-type-variance-in-kotlin"
        title="Understanding type variance in Kotlin"
        year="2020"
      />
      <BlogEntry
        to="/blog/converting-your-android-gradle-scripts-to-kotlin"
        title="Converting your Android Gradle scripts to Kotlin"
        year="2019"
      />
    </div>
  );
}
