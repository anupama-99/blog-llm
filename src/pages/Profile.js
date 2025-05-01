import { useEffect, useState } from 'react';
import '../styles/Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState('account');

  const [editingBlog, setEditingBlog] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSummary, setEditSummary] = useState('');
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    const mockUser = {
      fullName: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      role: 'Author',
      joined: '2023-08-15',
    };
    setUser(mockUser);

    const mockBlogs = [
      {
        id: 3,
        title: 'Blogging Tips for Beginners',
        summary: 'How to start blogging effectively.',
        date: '2024-04-26',
        image: '',
      },
      {
        id: 2,
        title: 'React Hooks Overview',
        summary: 'A guide to useEffect and useState.',
        date: '2024-04-10',
        image: '',
      },
      {
        id: 1,
        title: 'My First Blog',
        summary: 'This is my first blog post.',
        date: '2024-03-20',
        image: '',
      },
    ];
    setBlogs(mockBlogs);
  }, []);

  const openEditDialog = (blog) => {
    setEditingBlog(blog);
    setEditTitle(blog.title);
    setEditSummary(blog.summary);
    setEditImage(blog.image || null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveEdit = () => {
    const updated = blogs.map((b) =>
      b.id === editingBlog.id
        ? { ...b, title: editTitle, summary: editSummary, image: editImage }
        : b
    );
    setBlogs(updated);
    setEditingBlog(null);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      <div className="profile-buttons">
        <button onClick={() => setView('account')} className={view === 'account' ? 'active' : ''}>
          Account
        </button>
        <button onClick={() => setView('library')} className={view === 'library' ? 'active' : ''}>
          Blog Library
        </button>
      </div>

      {view === 'account' && (
        <div className="profile-info">
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Member Since:</strong> {user.joined}</p>
        </div>
      )}

      {view === 'library' && (
        <>
          <h2>Blog Library</h2>
          <div className="profile-blogs">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="profile-blog-card">
                  <h3>{blog.title}</h3>
                  <p className="blog-date">{blog.date}</p>
                  {blog.image && <img src={blog.image} alt="Blog" className="blog-thumbnail" />}
                  <p>{blog.summary}</p>
                  <div className="blog-actions">
                    <a href={`/blog/${blog.id}`}>View Full Blog</a>
                    <button onClick={() => openEditDialog(blog)}>Edit</button>
                  </div>
                </div>
              ))
            ) : (
              <p>You haven’t posted any blogs yet.</p>
            )}
          </div>
        </>
      )}

      {editingBlog && (
        <div className="edit-modal">
          <div className="edit-dialog">
            <h3>Edit Blog</h3>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Blog Title"
            />
            <textarea
              rows="4"
              value={editSummary}
              onChange={(e) => setEditSummary(e.target.value)}
              placeholder="Blog Summary"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {editImage && <img src={editImage} alt="Preview" className="edit-preview" />}
            <div className="edit-buttons">
              <button onClick={saveEdit}>Save</button>
              <button className="cancel" onClick={() => setEditingBlog(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
