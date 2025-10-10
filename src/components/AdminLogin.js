// components/AdminLogin.js
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import HeroAdmin from './admin/HeroAdmin';
import AboutAdmin from './admin/AboutAdmin';
import EmployeesAdmin from './admin/EmployeesAdmin';
import ValuesAdmin from './admin/ValuesAdmin';
import StoryAdmin from './admin/StoryAdmin';
import IssuesAdmin from './admin/IssuesAdmin';
import GalleryAdmin from './admin/GalleryAdmin';
import NewsAdmin from './admin/NewsAdmin';

const AdminLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('adminAuth') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ADMIN_CREDENTIALS = {
    username: 'pfaadmin',
    password: 'PFA2024!secure'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setError('');
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  useSeo({
    title: "Admin Panel - PFA Movement",
    description: "Administrative panel for Progressive Forces of Afghanistan Movement"
  });

  if (!isLoggedIn) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3>🔐 Admin Login - PFA Movement</h3>
              </div>
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    🔑 Login to Admin Panel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-light sidebar">
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h5 className="mb-0">🏛️ PFA Admin</h5>
            <button onClick={handleLogout} className="btn btn-sm btn-outline-danger">
              🚪 Logout
            </button>
          </div>
          <nav className="nav flex-column p-3">
            <Link to="/admin" className="nav-link">📊 Dashboard</Link>
            <Link to="/admin/hero" className="nav-link">🎯 Hero Section</Link>
            <Link to="/admin/about" className="nav-link">👥 About Us</Link>
            <Link to="/admin/employees" className="nav-link">💼 Employees</Link>
            <Link to="/admin/values" className="nav-link">⭐ Values</Link>
            <Link to="/admin/story" className="nav-link">📖 Our Story</Link>
            <Link to="/admin/issues" className="nav-link">🎯 Issues</Link>
            <Link to="/admin/gallery" className="nav-link">🖼️ Gallery</Link>
            <Link to="/admin/news" className="nav-link">📰 News</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 main-content">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/hero" element={<HeroAdmin />} />
              <Route path="/about" element={<AboutAdmin />} />
              <Route path="/employees" element={<EmployeesAdmin />} />
              <Route path="/values" element={<ValuesAdmin />} />
              <Route path="/story" element={<StoryAdmin />} />
              <Route path="/issues" element={<IssuesAdmin />} />
              <Route path="/gallery" element={<GalleryAdmin />} />
              <Route path="/news" element={<NewsAdmin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Dashboard Component
const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to PFA Movement Admin Panel. Select a section from the sidebar to manage content.</p>
  </div>
);

export default AdminLogin;