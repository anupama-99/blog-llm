import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../styles/CreateBlog.css';

function CreateBlog() {
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  const handleGenerateBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/llm/generate', { topic });
      const blog = res.data;
      await API.post('/blogs', blog);
      alert('Blog Created Successfully!');
      navigate('/blogs');
    } catch (error) {
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="create-blog-container">
      <h2 className="create-blog-title">Create a New Blog ✨</h2>
      <form className="create-blog-form" onSubmit={handleGenerateBlog}>
        <input 
          type="text" 
          placeholder="Enter blog topic..." 
          value={topic} 
          onChange={(e) => setTopic(e.target.value)} 
          required 
        />
        <button type="submit" className="create-blog-button">Generate Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
