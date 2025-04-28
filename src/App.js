import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';
import ProtectedRoute from './components/ProtectedRoute'; // 👈 Import ProtectedRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route 
          path="/blogs" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create" 
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
