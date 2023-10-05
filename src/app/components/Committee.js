import Link from "next/link";

export default function Committee() {
  return (
    <>
      <section id="breadcrumbs " className="breadcrumbs">
        
      </section>

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Committee</h2>
            <p>Scientific <span className="text-success">Committee</span></p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="/team/sara.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4> Dr Saraless Nadarajah </h4>
                  <span>University of Manchester, UK</span>
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="/team/adamu.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4> Mr Adamu Abubakar Umar </h4>
                  <span>University of Manchester, UK</span>
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="/team/team-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Dr Emmanuel Ogundimu </h4>
                  <span>University of Durham, UK</span>
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="/team/team-4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4> Dr Edson Utazi </h4>
                  <span>University of Southampton, UK</span>
                  <div className="social">
                    <Link href="">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
