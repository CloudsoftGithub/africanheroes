import Link from "next/link";
export default function PassEvent() {
  return (
    <>
      <section id="event" className="event section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Workshop</h2>
            <p>Previous Workshop Events </p>
          </div>

          <div className="container">
            <div className="row g-2">
              <div className="col-6 col-lg-3">
                <div className="card">
                  <img src="/imgs/gal1.jpg" className="img-fluid " />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card">
                  <img src="/imgs/gal2.jpg" className="img-fluid " />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card">
                  <img src="/imgs/gal3.jpg" className="img-fluid " />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="card">
                  <img src="/imgs/gal4.jpg" className="img-fluid " />
                </div>
              </div>
            </div>
          </div>
          <Link
            className="btn btn-outline-success mt-3 "
            href="/gallary"
          >
            Explore More
          </Link>
        </div>
      </section>
    </>
  );
}
