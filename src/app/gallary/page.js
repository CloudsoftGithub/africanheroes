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
              <div className="text-muted">Event @ Nigeria</div>
              <div className="card">
                <img src="/image/slide-7.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ South Africa</div>
              <div className="card">
                <img src="/image/slide-6.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Morocco</div>
              <div className="card">
                <img src="/image/slide-4.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Niger</div>
              <div className="card">
                <img src="/image/slide-5.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Togo</div>
              <div className="card">
                <img src="/imgs/work1.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Ghana</div>
              <div className="card">
                <img src="/imgs/work2.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Sudan</div>
              <div className="card">
                <img src="/imgs/work4.jpg" className="img-fluid " />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-5">
              <div className="text-muted">Event @ Cameroon</div>
              <div className="card">
                <img src="/imgs/work5.jpg" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
