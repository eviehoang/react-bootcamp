import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="/images/blue-logo.png"
            height="50"
            alt="Your Logo Alt Text Here"
            loading="lazy"
            className="wiggle"
          />
        </a>
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
