import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isLanding = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="WriteLabs Logo" className="navbar-logo" />
          <span className="navbar-title">WriteLabs</span>
        </Link>
      </div>

      <div className="navbar-right">
        {isLanding ? (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        ) : token ? (
          <>
            <Link to="/blogs" className="nav-button">Home</Link>
            <Link to="/create" className="nav-button">Create Blog</Link>
            <Link to="/profile" className="nav-button">Profile</Link>
            <button onClick={handleLogout} className="nav-button logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
