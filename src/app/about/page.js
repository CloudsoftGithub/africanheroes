import Link from "next/link"

export default function page() {
  return (
    <main id="main about">
      {/* <!-- ======= Breadcrumbs ======= -->*/}
      <section id="breadcrumbs" className="breadcrumbs">
        
      </section>

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
              <p >
                According to an Elsevier report, only about 1% of the world&apos;s
                research is by Africans Scholars in Africa. This is not because
                Africans are not talented enough, they are not given enough
                support or resources to conduct a research. instead, the
                outsiders (especially Europeans and North Americans) have been
                keen on stealing data from Africa to publish papers for their
                own promotion
              </p>
              
              
            
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about ">
        <div className="container section-bg p-3">
          <div className="row content">
            <div className="col-lg-12">
              <h3 className="fw-bolder">Researcher Work</h3>
              <p>
               In 2017, I established the Charity EducateAfrica <Link className="text-success" href="https://educate-africa.github.io/"> Educate Africa</Link>.
               One of the aims of this Charity is to inspired Africans in Africa to work on problems important to their countries.
               I am currently working 24/7 with researchers in about 20 African Countries, the attached give a list of publications broken down by
               the country of residence of the researchers.
            
              </p>
              
             
            </div>
            <div className="col-lg-12 mt-5">
              <h3 className="fw-bolder">Purpose</h3>
              <p>
               The purpose of the workshop is to:
               <ul>
                <li><i className=" bi bi-chevron-right"> </i>
                  Present talks by African researchers in Africa.
                </li>
                <li><i className=" bi bi-chevron-right"> </i>
                  Showcase what researcher have achieved and plan to achieved in future.
                </li>
                <li><i className=" bi bi-chevron-right"> </i>
                  Inspired others in the UK and else where to initiate collaboration with researcher in Africa.
                </li>
                <li ><i className=" bi bi-chevron-right"> </i>
                 The purpose of the workshop is not to invite bigshots in the UK or else where to talk about research they have done relating to Africa.

                </li>
               </ul>
            
              </p>
              
             
            </div>
          </div>
        </div>
      </section>

    

     
    </main>
  )
}
