import Link from "next/link";

export default function Carousel() {
  return (
    <>
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators" id="hero-carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/image/background.jpg"
                className="d-block w-100 caro-img"
                alt="..."
              />
                <div className="container">
              <div className="carousel-container">
               
                  <h2 className="animate__animated animate__fadeInUp">
                    African Heroes In Statistical Research Workshop 2023 <br /> 
                    @ University of Manchester, <br />United Kingdom                    
                  </h2>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/imgs/gal2.jpg"
                className="d-block w-100 caro-img"
                alt="..."
              />
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Purpose</h2>
                  <div className="animate__animated animate__fadeInUp">
                    <div className="row text-center text-md-start g-4">
                      <div className="col-lg-6 col-md-5 col-12 d-flex align-items-center justify-content-center">
                        <h3>Present talks by African researchers in Africa. </h3> 
                      </div>

                      <div className="col-lg-6 col-md-5 col-12 d-flex align-items-center justify-content-center">
                        <small>
                          <h3>Showcase what researcher have achieved and plan to  achieved in future.</h3>
                         
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/imgs/gal4.jpg"
                className="d-block w-100 caro-img"
                alt="..."
              />
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Scientific Committee
                  </h2>
                  <div className="animate__animated animate__fadeInUp">
                    <div className="row">
                    <div className="col-2"></div>
                   <div className="col-12 text-start ">
                   <div>
                       <h3 >Dr Saraless Nadarajah University of Manchester, UK&lsquo; </h3> 
                        <br />
                        <h3>Mr Adamu Abubakar Umar University of Manchester, UK&lsquo;</h3>
                        <br />
                        <h3>Dr Emmanuel Ogundimu University of Durham, UK&lsquo;</h3>
                        <br />
                       <h3> Dr Edson Utazi University of Southampton, UK&lsquo;</h3>
                      </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
