import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mentor BD</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/network' ? 'active' : ''}`} to="/network">Network</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/mentor-matching' ? 'active' : ''}`} to="/mentor-matching">Mentor Matching</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
