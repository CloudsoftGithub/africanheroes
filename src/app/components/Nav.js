'use client'
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="header" id="#header">
        <nav className="navbar navbar-expand-lg fixed-top shadow py-1">
          <div className="container">
            <h1>
              <Link className="navbar-brand me-auto logo" href="/">
                African <span className="text-success">Heroes</span>
              </Link>
            </h1>

            <button
              className="navbar-toggler "
              type="button"
               onClick={() => setToggle(!toggle)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
             
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <ul className="navbar-nav ms-auto nav-underline">
                <li className="nav-item">
                  <Link className="nav-link mx-1" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-1" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-1" href="/upcoming">
                    Upcoming Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-1" href="/speaker">
                    Speakers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-1" href="/gallary">
                    Gallary
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
