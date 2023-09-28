import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="footer-info">
                 
                  <p>
                    African heros <br />
                    address here
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                
                <strong>Phone:</strong> +234 
                <br />
                <strong>Email:</strong> @gmail.com
                <br />
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
             
                <p>
                 <Link href="https://educate-africa.github.io" className="text-light"> Educate Africa </Link> 
                  <br />
                  <Link href="" className="text-light"> Github Link </Link> 
                  <br />
                </p>
              </div>

              <div className=" col-lg-4 col-md-6 social-links  mx-4">
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
    </>
  );
}
