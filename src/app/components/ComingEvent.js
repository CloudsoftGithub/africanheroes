import Link from "next/link";
import React from "react";

export default function ComingEvent() {
  return (
    <>
      <section id="coming" className="contact">
        <div className="container">
          
          <p className="text-success fw-semibold text-center">UPCOMING EVENT</p>
          
          <div className="row align-items-center">
            <div className="col-12">
              <div className="c-items">
                <img
                  src="/image/four.jpg"
                  className=" w-100 h-50 img-fluid c-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
