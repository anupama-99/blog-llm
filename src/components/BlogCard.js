import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div style={styles.card}>
      <h3>{blog.title}</h3>
      <p style={styles.summary}>{blog.summary}</p>
      <Link to={`/blog/${blog._id}`} style={styles.readMore}>Read More</Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  },
  summary: {
    color: '#555',
    marginBottom: '10px'
  },
  readMore: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default BlogCard;
