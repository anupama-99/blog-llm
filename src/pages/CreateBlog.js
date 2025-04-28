import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  const handleGenerateBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/llm/generate', { topic });
      const blog = res.data;
      await API.post('/blogs', blog); // Save the generated blog
      alert('Blog Created Successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleGenerateBlog} style={styles.form}>
        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Generate Blog</button>
      </form>
    </div>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' },
  input: { marginBottom: '10px', padding: '10px' },
  button: { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none' }
};

export default CreateBlog;

  