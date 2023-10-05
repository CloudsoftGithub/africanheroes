"use client";
import Link from "next/link";
export default function Nav() {
  return (
    <>
    <header id="header" className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container">
          <a className="navbar-brand" href="/">
            African <span className="text-success">Heroes</span>
          </a>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="/upcoming">
                  Upcoming event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/speaker">
                  Speaker
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/gallary">
                  Gallary
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
}
