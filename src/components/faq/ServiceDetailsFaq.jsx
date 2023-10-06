import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Common Questions on Web & Software Development
                </h2>

                <div className="faq__list">
                  <Accordion defaultActiveKey="0" className="accordion">
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Why is custom software development important?
                      </Accordion.Header>
                      <Accordion.Body className="accordian-body">
                        <p>
                          Custom software is tailor-made to fit your business
                          needs, ensuring efficiency, scalability, and a higher
                          return on investment compared to off-the-shelf
                          solutions.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        How do we ensure the quality of our software?
                      </Accordion.Header>
                      <Accordion.Body className="accordian-body">
                        <p>
                          We adopt rigorous testing methods, both manual and
                          automated, to ensure bug-free software. Our QA team
                          ensures that the software meets the highest industry
                          standards.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        What web technologies do we specialize in?
                      </Accordion.Header>
                      <Accordion.Body className="accordian-body">
                        <p>
                          {" "}
                          Our team is adept in a plethora of web technologies
                          including but not limited to React, Angular, Node.js,
                          PHP, and Ruby on Rails, ensuring we can cater to
                          diverse project requirements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        How do we handle post-deployment support?
                      </Accordion.Header>
                      <Accordion.Body className="accordian-body">
                        <p>
                          We believe in building lasting relationships.
                          Post-deployment, we offer support packages that cover
                          maintenance, updates, and troubleshooting to ensure
                          smooth software operations.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
