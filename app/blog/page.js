import BlogEntry from "../components/BlogEntry";

export default function Blog() {
    return (
      <div className="max-w-4xl mx-auto font-mono flex flex-col space-y-8">
        <BlogEntry title="Blog Entry" year="2024"/>
        <BlogEntry title="Blog Entry" year="2020"/>
        <BlogEntry title="Blog Entry" year="2019"/>
      </div>
    );
  }
  