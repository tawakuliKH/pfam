import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './App.css';
import './i18n';
import AdminLogin from './components/AdminLogin';

// Component to handle redirects from 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter and navigate to the actual route
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/*" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;