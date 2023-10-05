import React from "react";

export default function Purpose() {
  return (
    <section id="client" className="client section-bg">
      <div className="container shadow-sm ">
        <p className="text-success fw-semibold text-center">PURPOSE</p>

        <div className="row text-md-start g-4 d-flex align-items-center justify-content-start">
          <div className="col-lg-3 col-md-4 col-12 ">
            <i className=" bi bi-chevron-right"> </i>
            Present talks by African researchers in Africa.
          </div>

          <div className="col-lg-3 col-md-4 col-12 ">
            <i className=" bi bi-chevron-right"> </i>
            Showcase what researcher have achieved and plan to achieved in
            future.
          </div>

          <div className="col-lg-3 col-md-4 col-12 ">
            <i className=" bi bi-chevron-right"> </i>
            Inspired others in the UK and else where to initiate collaboration
            with researcher in Africa.
          </div>

          <div className="col-lg-3 col-md-4 col-12 ">
            <i className=" bi bi-chevron-right"> </i>
            The purpose of the workshop is not to invite bigshots in the UK or
            else where to talk about research they have done relating to Africa.
          </div>
        </div>
      </div>
    </section>
  );
}
