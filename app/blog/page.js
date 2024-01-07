import BlogEntry from "../components/BlogEntry";

export default function Blog() {
    return (
      <div className="max-w-4xl mx-auto font-mono flex flex-col space-y-8">
        <BlogEntry to="" title="Creating and managing custom-scoped components in Dagger/Anvil" year="2024"/>
        <BlogEntry title="Understanding type variance in Kotlin" year="2020"/>
        <BlogEntry title="Converting your Android Gradle scripts to Kotlin" year="2019"/>
      </div>
    );
  }
  