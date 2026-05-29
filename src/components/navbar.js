import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ mode, fn }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();



  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().toLowerCase()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');//hmm
    }
  };

  return (
    <>
    <nav id="navbar" className={`navbar fixed-top navbar-expand-xxl ${mode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🗞️News App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/politics">Politics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About </Link>
            </li>
            <li>
              V 0.0.1
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`btn btn-${mode ? 'light' : 'dark'}`}
                onClick={fn}>
                {`${mode ? 'Light' : 'Dark'} Mode`}
              </button>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;