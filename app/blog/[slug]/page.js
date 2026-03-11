import { DATA } from "@/lib/data";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return DATA.blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }) {
  const blog = DATA.blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} — Bhavya Gulati`,
    description: blog.excerpt,
  };
}

export default function BlogPage({ params }) {
  const blog = DATA.blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return <BlogPost blog={blog} />;
}
