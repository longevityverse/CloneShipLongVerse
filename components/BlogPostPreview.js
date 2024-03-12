
import Link from "next/link";

const BlogPostPreview = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.summary}</p>
    <Link href={`/blog/${post.slug}`}>Read More</Link>
    {/* Add these: */}
    <div>
      <button onClick={handleComment}>Comment</button>
      <button onClick={handleShare}>Share</button>
    </div>
  </article>
);

function handleComment() {
  {/* Add these: */}
}

function handleShare() {
  {/* Add these: */}
  navigator.clipboard.writeText(window.location.href + `/blog/${post.slug}`).then(() => {
    toast.success('Link copied to clipboard!');
  }, (err) => {
    toast.error('Failed to copy link.');
  });
}

export default BlogPostPreview;
