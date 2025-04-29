import { useEffect, useState } from 'react';
import '../styles/Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated user info
    const mockUser = {
      fullName: 'John Doe',
      email: 'john@example.com',
    };
    setUser(mockUser);

    // Simulated blog list for this user
    const mockBlogs = [
      { id: 1, title: 'My First Blog', summary: 'This is my first blog post.' },
      { id: 2, title: 'React Hooks Overview', summary: 'A guide to useEffect and useState.' },
      { id: 3, title: 'Blogging Tips for Beginners', summary: 'How to start blogging effectively.' }
    ];
    setBlogs(mockBlogs);
  }, []);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h2>My Blog Library</h2>
      <div className="profile-blogs">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="profile-blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
            </div>
          ))
        ) : (
          <p>You haven’t posted any blogs yet.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
