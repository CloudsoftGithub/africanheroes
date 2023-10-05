import Link from "next/link";
import React from "react";

export default function Upcoming() {
  return (
    <main id="main about">
      {/* <!-- ======= Breadcrumbs ======= -->*/}
      <section id="breadcrumbs" className="breadcrumbs"></section>

      <section id="coming" class="contact">
        <div class="container">
        <p className="text-success fw-semibold text-center">UPCOMING EVENT</p>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="c-items">
                <img
                  src="/image/four.jpg"
                  className=" d-block w-100 img-fluid c-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}
