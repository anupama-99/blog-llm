import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import API from '../services/api';
import '../styles/Home.css'; // Correct path

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await API.get('/blogs');
        setBlogs(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-heading">Explore Blogs ✍️</h1>
      <p className="home-subheading">Discover fresh AI-powered content!</p>

      {loading ? (
        <p className="home-loading">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="home-empty">No blogs found. Create the first one!</p>
      ) : (
        <div className="home-blogList">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
