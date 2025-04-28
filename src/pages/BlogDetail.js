import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await API.get(`/blogs/${id}`);
        setBlog(res.data);
        setComments(res.data.comments || []);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    }
    fetchBlog();
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/blogs/${id}/comments`, { comment });
      setComments([...comments, res.data]);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      <hr />
      <h4>Comments</h4>
      {comments.map((cmt, index) => (
        <div key={index} style={styles.comment}>
          {cmt.text}
        </div>
      ))}

      <form onSubmit={handleComment} style={styles.form}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Comment</button>
      </form>
    </div>
  );
}

const styles = {
  form: { marginTop: '10px', display: 'flex', flexDirection: 'column', width: '300px' },
  input: { marginBottom: '10px', padding: '10px' },
  button: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' },
  comment: { backgroundColor: '#f1f1f1', padding: '8px', marginTop: '5px', borderRadius: '5px' }
};

export default BlogDetail;

  