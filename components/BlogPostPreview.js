// components/BlogPostPreview.js
import Link from "next/link";

const BlogPostPreview = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.summary}</p>
    <Link href={`/blog/${post.slug}`}>Read More</Link>
    // Add these:
    <div>
      <button onClick={handleComment}>Comment</button>
      <button onClick={handleShare}>Share</button>
    </div>
  </article>
);

function handleComment() {
  // logic to handle comment
}

function handleShare() {
  // logic to handle share
}

export default BlogPostPreview;
