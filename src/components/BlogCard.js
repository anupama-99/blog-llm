import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';

function BlogCard({ blog }) {
  const defaultImage = 'https://source.unsplash.com/featured/?writing,blog';

  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <img
        src={blog.image || defaultImage}
        alt={blog.title}
        className="blog-image"
      />
      <p>{blog.summary}</p>
      <Link to={`/blog/${blog._id}`} className="read-more">Read More</Link>
    </div>
  );
}

export default BlogCard;
