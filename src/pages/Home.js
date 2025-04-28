import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import API from '../services/api';
import '../styles/Home.css'; // Import CSS here

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
      <h1 className="home-heading">Welcome to WriteLabs ✍️</h1>
      <p className="home-subheading">Explore freshly generated AI-powered blogs!</p>

      {loading ? (
        <p className="home-loading">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="home-empty">No blogs available. Be the first to create one!</p>
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
