import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="section-b">
        <div className="container">
          <p className="lead text-center text-success fw-bolder">CONTACT</p>
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="footer-info">
                      <p>
                        <strong className="text-light">Address: </strong>
                        Alan Turing Building, Universiy of Manchester, <br />
                        Oxford Road, United Kingdom, M13 9PL
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 footer-links">
                    <strong>Phone:</strong> +44 161 275 5912
                    <br /> 
                    <strong>Email:</strong> Saraless.Nadarajah@manchester.ac.uk
                    <br />
                  </div>

                  <div className="col-lg-6 col-md-6 footer-links  ">
                    <p>
                      <Link
                        href="https://educate-africa.github.io"
                        className="text-light text-decoration-none c-color"
                      >
                        <strong>Website: </strong>
                        Educate Africa
                      </Link>
                      <br />
                      <Link href="" className="text-light text-decoration-none c-color ">
                        <strong>Github: </strong>Github Link
                      </Link>
                      <br />
                    </p>
                  </div>

                  <div className=" col-lg-6 col-md-6 social-links">
                    <Link href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="#" className="google-plus">
                      <i className="bi bi-skype"></i>
                    </Link>
                    <Link href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="copyright">
                &copy; Copyright 2023
                <strong>
                  <span> African Heros</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                Developed @ <Link href="">Cloudsoft Consulting Limited</Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
