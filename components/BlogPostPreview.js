import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const BlogPostPreview = ({ post }) => {
  const router = useRouter();

  function handleComment() {
    router.push(`/blog/${post.slug}#comments`);
  }

  function handleShare() {
    navigator.clipboard
      .writeText(window.location.href + `/blog/${post.slug}`)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link:", err);
        toast.error("Failed to copy link.");
      });
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <Link href={`/blog/${post.slug}`}>Read More</Link>
      <div>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </article>
  );
};

export default BlogPostPreview;
