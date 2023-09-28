"use client";
import React from "react";
import ReactPlayer from "react-player";

import Link from "next/link";
export default function Player() {
  return (
    <section id="player" className="player ">
      <div className="container">
        <div className="row content player">
          <div className="col-lg-6">
            <ReactPlayer url="vid.mp4" type="video/mp.4" controls={true} />
          </div>
          <div className="col-lg-6 col-md-4 pt-4 pt-lg-0">
            <h4>Brief Play</h4>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequa
              </li>
              <li>
                <i className="ri-check-double-line"></i> Duis aute irure dolor
                in reprehenderit in voluptate velit
              </li>
            </ul>

            <Link href="/about" class="btn border rounded-3  mt-3">
              <i class="bi bi-chevron-right "></i> Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
