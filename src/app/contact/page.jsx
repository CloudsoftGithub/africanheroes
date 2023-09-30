import React from 'react'

export default function Contact() {
  return (
    <main id="main contact">
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="c-items">
                  <img
                    src="/image/slide-1.jpg"
                    className=" d-block w-100 img-fluid c-img"
                  />
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>CCL</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>jimiyaks3@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+234 701 022 8016</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form>
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        readOnly
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        readOnly
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                      readOnly
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      readOnly
                    ></textarea>
                  </div>
                  <div class="my-3">
                    
                    <div class="sent-message">
                      Please fill all input accurately
                    </div>
                  </div>
                  <div class="text-center">
                    <button className="btn btn-outline-success" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" class="faq">
          <div class="container">
            <div class="section-title">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>

            <div class="accordion accordion-flush" id="questions">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-one"
                  >
                    Where exactly are you located?
                  </button>
                </h2>
                <div
                  id="question-one"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam beatae fuga animi distinctio perspiciatis adipisci
                    velit maiores totam tempora accusamus modi explicabo
                    accusantium consequatur, praesentium rem quisquam molestias
                    at quos vero. Officiis ad velit doloremque at. Dignissimos
                    praesentium necessitatibus natus corrupti cum consequatur
                    aliquam! Minima molestias iure quam distinctio velit.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-two"
                  >
                    How much does it cost to attend?
                  </button>
                </h2>
                <div
                  id="question-two"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam beatae fuga animi distinctio perspiciatis adipisci
                    velit maiores totam tempora accusamus modi explicabo
                    accusantium consequatur, praesentium rem quisquam molestias
                    at quos vero. Officiis ad velit doloremque at. Dignissimos
                    praesentium necessitatibus natus corrupti cum consequatur
                    aliquam! Minima molestias iure quam distinctio velit.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-three"
                  >
                    What do I need to Know?
                  </button>
                </h2>
                <div
                  id="question-three"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam beatae fuga animi distinctio perspiciatis adipisci
                    velit maiores totam tempora accusamus modi explicabo
                    accusantium consequatur, praesentium rem quisquam molestias
                    at quos vero. Officiis ad velit doloremque at. Dignissimos
                    praesentium necessitatibus natus corrupti cum consequatur
                    aliquam! Minima molestias iure quam distinctio velit.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-four"
                  >
                    How Do I sign up?
                  </button>
                </h2>
                <div
                  id="question-four"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam beatae fuga animi distinctio perspiciatis adipisci
                    velit maiores totam tempora accusamus modi explicabo
                    accusantium consequatur, praesentium rem quisquam molestias
                    at quos vero. Officiis ad velit doloremque at. Dignissimos
                    praesentium necessitatibus natus corrupti cum consequatur
                    aliquam! Minima molestias iure quam distinctio velit.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-five"
                  >
                    Do you help me find a job?
                  </button>
                </h2>
                <div
                  id="question-five"
                  class="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam beatae fuga animi distinctio perspiciatis adipisci
                    velit maiores totam tempora accusamus modi explicabo
                    accusantium consequatur, praesentium rem quisquam molestias
                    at quos vero. Officiis ad velit doloremque at. Dignissimos
                    praesentium necessitatibus natus corrupti cum consequatur
                    aliquam! Minima molestias iure quam distinctio velit.
                  </div>
                </div>
              </div>

              {/*<div class="row faq-item d-flex align-items-stretch">
             <div class="col-lg-5">
                <i class="bx bx-help-circle"></i>
                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </div>

            <div class="row faq-item d-flex align-items-stretch">
              <div class="col-lg-5">
                <i class="bx bx-help-circle"></i>
                <h4>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>
            </div>

            <div class="row faq-item d-flex align-items-stretch">
              <div class="col-lg-5">
                <i class="bx bx-help-circle"></i>
                <h4>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus.
                </p>
              </div>
            </div>

            <div class="row faq-item d-flex align-items-stretch">
              <div class="col-lg-5">
                <i class="bx bx-help-circle"></i>
                <h4>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                  Voluptas dolorum accusantium sunt sit enim. Provident
                  consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                  Repellat assumenda soluta sunt pariatur error doloribus fuga.
                </p>
              </div>
            </div>

            <div class="row faq-item d-flex align-items-stretch">
              <div class="col-lg-5">
                <i class="bx bx-help-circle"></i>
                <h4>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </div>*/}
            </div>
          </div>
        </section>
      </main>
  )
}
