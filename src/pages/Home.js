import { useEffect, useState, useRef } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Home.css';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const categories = [
    'All', 'Tech', 'AI', 'Travel', 'Health', 'Food', 'Business', 'Finance',
    'Education', 'Gaming', 'Design', 'Fashion', 'Science', 'Sports', 'Music',
    'Photography', 'Books', 'Culture', 'Politics', 'Programming', 'Psychology',
    'Fitness', 'Environment', 'Marketing', 'Spirituality', 'Art', 'News',
    'Movies', 'Parenting', 'Productivity'
  ];
  

  useEffect(() => {
    const mockBlogs = [
      { _id: '1', title: 'AI in Daily Life', summary: 'How AI affects your everyday decisions.', category: 'AI', image: 'https://source.unsplash.com/featured/?ai' },
      { _id: '2', title: 'Backpacking Europe', summary: 'Tips for exploring Europe on a budget.', category: 'Travel' },
      { _id: '3', title: 'Healthy Eating Habits', summary: 'Simple diet changes for a better you.', category: 'Health', image: 'https://source.unsplash.com/featured/?healthy-food' },
      { _id: '4', title: 'Startup Fundamentals', summary: 'Everything to know before launching your startup.', category: 'Business' },
      { _id: '5', title: 'Ultimate Pizza Guide', summary: 'Explore global pizza styles.', category: 'Food', image: 'https://source.unsplash.com/featured/?pizza' },
      { _id: '6', title: 'Gaming Trends 2024', summary: 'The biggest games and genres of the year.', category: 'Gaming' },
      { _id: '7', title: 'Personal Finance Tips', summary: 'Save money and grow wealth.', category: 'Finance' },
      { _id: '8', title: 'Online Learning Hacks', summary: 'Maximize your learning using digital tools.', category: 'Education' },
      { _id: '9', title: 'Web Design Essentials', summary: 'Basics every designer should know.', category: 'Design', image: 'https://source.unsplash.com/featured/?webdesign' },
      { _id: '10', title: 'Fashion in Winter', summary: 'Stay warm and stylish.', category: 'Fashion' },
      { _id: '11', title: 'Remote Work Tips', summary: 'Productivity when working from home.', category: 'Business' },
      { _id: '12', title: 'The Future of Tech', summary: 'What’s next in technology.', category: 'Tech', image: 'https://source.unsplash.com/featured/?technology' },
      { _id: '13', title: 'Study Techniques That Work', summary: 'Learn smarter, not harder.', category: 'Education' },
      { _id: '14', title: 'Travel Photography', summary: 'Capture memories on the go.', category: 'Travel', image: 'https://source.unsplash.com/featured/?travel' },
      { _id: '15', title: 'Investing in AI Startups', summary: 'Why AI startups are booming.', category: 'AI' },
    ];
    setTimeout(() => {
      setBlogs(mockBlogs);
      setLoading(false);
    }, 400);
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });

  return (
    <div className="home-container">
      <div className="search-and-category-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="scroll-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>←</button>
          <div className="category-scroll" ref={scrollRef}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>→</button>
        </div>
      </div>

      {loading ? (
        <p className="home-loading">Loading blogs...</p>
      ) : (
        <div className="home-blog-list">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="home-empty">No blogs found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
