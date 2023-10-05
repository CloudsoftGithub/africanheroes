import React from "react";

export default function Gallary() {
  return (
    <main id="main gallary">
      <section id="breadcrumbs" className="breadcrumbs"></section>

      <section id="event" className="event section-bg">
        <div className="container text-center text-lg-start text-md-start">
          <div className="section-title">
            <h2>Workshop</h2>
            <p>Previous Workshop Events </p>
          </div>

          <div className="row g-2">
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal4.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal3.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal2.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal1.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal5.jpg" className="img-responsive " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Africa</div>
              <div className="card">
                <img src="/imgs/gal6.jpg" className="img-responsive " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
