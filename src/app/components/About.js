import Link from "next/link";

export default function About() {
  return (
    <main id="main about">
      {/* <!-- ======= Breadcrumbs ======= -->*/}

      <section id="about" className="about">
        <div className="container">
          <div className="row content justify-content-center align-items-center">
            <div className="col-lg-6">
              <h2>
                African <span className="text-success">Heroes</span>
              </h2>

              <img src="/image/slide-3.jpg" className="img-fluid pt-2" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 text-border">
              <h3 className="fw-bolder">Background:</h3>
              <p className="lead">
                According to an Elsevier report, only about 1% of the world&apos;s
                research is by Africans Scholars in Africa. This is not because
                Africans are not talented enough, they are not given enough
                support or resources to conduct a research. instead, the
                outsiders (especially Europeans and North Americans) have been
                keen on stealing data from Africa to publish papers for their
                own promotion
              </p>
              
              
              <Link className="btn btn-outline-success" href="/about">
                <i className="bi bi-chevron-right">Read more</i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
