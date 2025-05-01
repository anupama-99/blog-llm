import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../styles/CreateBlog.css';

function CreateBlog() {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/llm/generate', { topic, description });
      setContent(res.data.content || '');
    } catch (error) {
      alert('Failed to generate blog.');
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic || !content) {
      alert('Please provide a topic and content.');
      return;
    }

    try {
      await API.post('/blogs', { title: topic, summary: description, content });
      alert('Blog Created Successfully!');
      navigate('/blogs');
    } catch (error) {
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="create-blog-container">
      <h2 className="create-blog-title">Create a Blog </h2>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />

        <textarea
          placeholder="Optional Description (for AI)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        <button
          type="button"
          className="create-blog-button"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate with AI '}
        </button>

        <textarea
          placeholder="Write or edit your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          required
        />

        <button type="submit" className="create-blog-button">Publish Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
