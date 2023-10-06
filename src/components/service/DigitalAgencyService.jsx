import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/website.jpg";
import Service12 from "../../../public/assets/imgs/service/1/interactive-design.jpg";
import Service13 from "../../../public/assets/imgs/service/1/digital-marketing.jpg";
import Service14 from "../../../public/assets/imgs/service/1/storybranding.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef(null);

  useEffect(() => {
    if (serviceList.current) {
      let listItems = serviceList.current.children;

      for (let item of listItems) {
        item.addEventListener("mouseenter", function (e) {
          let service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));
          if (service_id != 1) {
            setActiveList(0);
          }
        });

        item.addEventListener("mouseleave", function (e) {
          let service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      // Your GSAP animations
      let tHero = gsap.timeline({
        scrollTrigger: {
          trigger: ".service__area",
          start: "top center+=300",
          end: "bottom bottom",
          markers: false,
        },
      });

      tHero.from(".title-anim, .text-anim", {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      });

      tHero.from(".animation_home1_service", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      });
    }
  }, []);

  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">service</h2>
                <h3 className="sec-title title-anim">
                  Solutions we <br />
                  provide
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for creative problem-solving and forward-thinking
                  brands that push boundaries
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__top-btn">
                <div className="btn_wrapper">
                  <Link
                    href="/service-v6-dark"
                    className="btn-item wc-btn-secondary btn-hover"
                  >
                    <span></span> View <br />
                    all services <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service11}
                    alt="Web & Mobile Development Image"
                    className={
                      activeImg === 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    alt="Interaction Design Image"
                    className={
                      activeImg === 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service13}
                    alt="Digital Marketing Image"
                    className={
                      activeImg === 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Branding and Strategy Image"
                    className={
                      activeImg === 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div ref={serviceList} className="service__list text-anim">
                  <div
                    className={
                      activeList === 1
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="1"
                  >
                    <h4 style={{ color: "#00ffd0" }}>
                      Web & Mobile Development
                    </h4>
                    <p>
                      Craft high-performance websites and apps with our tailored
                      development services. Experience seamless digital
                      solutions that resonate on any device.
                    </p>
                  </div>

                  <div
                    className={
                      activeList === 2
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="2"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Interaction Design</h4>
                    <p>
                      Redefine user engagement with intuitive interfaces. Our
                      designs prioritize usability, ensuring flawless
                      interactions that boost conversions.
                    </p>
                  </div>

                  <div
                    className={
                      activeList === 3
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="3"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Digital Marketing</h4>
                    <p>
                      Broaden your horizons with our holistic marketing
                      strategies. From SEO to content and social media, we
                      deliver tailored campaigns for impactful results.
                    </p>
                  </div>

                  <div
                    className={
                      activeList === 4
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="4"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Branding and Strategy</h4>
                    <p>
                      Shape a memorable brand aligned with your vision. We
                      devise data-driven strategies, cementing your brand&apos;s
                      place in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyService;
