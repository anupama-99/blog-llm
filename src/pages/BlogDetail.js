import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const mockBlogs = [
      { _id: '1', title: 'AI in Daily Life', content: 'This is a full blog about AI in life...', category: 'AI', image: 'https://source.unsplash.com/featured/?ai' },
      { _id: '2', title: 'Backpacking Europe', content: 'Here’s a full guide to backpacking Europe...', category: 'Travel' },
      { _id: '3', title: 'Healthy Eating Habits', content: 'These habits will help improve your health...', category: 'Health', image: 'https://source.unsplash.com/featured/?healthy-food' },
    ];

    const found = mockBlogs.find((b) => b._id === id);
    if (found) {
      setBlog(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!blog) return <p className="blog-loading">Loading blog...</p>;

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-card">
        <h1 className="blog-detail-title">{blog.title}</h1>
        {blog.image && <img src={blog.image} alt={blog.title} className="blog-detail-image" />}
        <p className="blog-detail-content">{blog.content}</p>
        <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
      </div>
    </div>
  );
}

export default BlogDetail;
