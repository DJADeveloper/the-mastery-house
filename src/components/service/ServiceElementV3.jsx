import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Service21 from "../../../public/assets/imgs/service/2/wordpress.svg";
import Service22 from "../../../public/assets/imgs/service/2/react.svg";
import Service23 from "../../../public/assets/imgs/service/2/python.svg";
import Service24 from "../../../public/assets/imgs/service/2/blockchain.svg";
import Service25 from "../../../public/assets/imgs/service/2/ecommerce.svg";
import Service26 from "../../../public/assets/imgs/service/2/saas.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-text text-anim">
                <p>
                  We harness the latest technologies to build scalable and
                  efficient software solutions. From web applications to
                  blockchain development, our expertise ensures your digital
                  success.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Elevating your digital presence through our cutting-edge
                  development services.
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {/* Web & Mobile App Development */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={102}
                      height={114}
                      src={Service21}
                      alt="Service Icon - Web & Mobile App Development"
                    />
                    <h3 className="service__title-2">
                      Web & Mobile App <br />
                      Development
                    </h3>
                    <p>
                      Crafting responsive and intuitive web and mobile
                      applications tailored to client needs.
                    </p>
                    <ul>
                      <li>+ Responsive Web Development</li>
                      <li>+ Native & Hybrid Mobile Apps</li>
                      <li>+ PWA Development</li>
                    </ul>
                  </div>
                </div>

                {/* Frontend Technologies */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={107}
                      height={114}
                      src={Service22}
                      alt="Service Icon - Frontend Technologies"
                    />
                    <h3 className="service__title-2 ">
                      Frontend <br />
                      Technologies
                    </h3>
                    <p>
                      Utilizing the latest frameworks and libraries to build
                      visually appealing and performant user interfaces.
                    </p>
                    <ul>
                      <li>+ React & Vue.js</li>
                      <li>+ Angular</li>
                      <li>+ Web Components</li>
                    </ul>
                  </div>
                </div>

                {/* Backend & API Development */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={112}
                      height={114}
                      src={Service23}
                      alt="Service Icon - Backend & API Development"
                    />
                    <h3 className="service__title-2">
                      Backend & API <br />
                      Development
                    </h3>
                    <p>
                      Building robust backend systems and APIs to power web and
                      mobile applications.
                    </p>
                    <ul>
                      <li>+ Node.js & Express.js</li>
                      <li>+ REST & GraphQL APIs</li>
                      <li>+ Database Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                {/* Blockchain Development */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={102}
                      height={114}
                      src={Service24}
                      alt="Service Icon - Blockchain Development"
                    />
                    <h3 className="service__title-2">
                      Blockchain <br />
                      Development
                    </h3>
                    <p>
                      Harnessing the power of blockchain technology for
                      decentralized applications, smart contracts, and more.
                    </p>
                    <ul>
                      <li>+ Smart Contract Development</li>
                      <li>+ DApp Development</li>
                      <li>+ Cryptocurrency Integration</li>
                    </ul>
                  </div>
                </div>

                {/* Custom E-commerce Solutions */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={107}
                      height={114}
                      src={Service25}
                      alt="Service Icon - Custom E-commerce Solutions"
                    />
                    <h3 className="service__title-2 ">
                      Custom E-commerce <br />
                      Solutions
                    </h3>
                    <p>
                      Creating bespoke e-commerce platforms with seamless user
                      experience and integrated payment gateways.
                    </p>
                    <ul>
                      <li>+ Shopping Cart Development</li>
                      <li>+ Payment Gateway Integration</li>
                      <li>+ Product Management Systems</li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise Software & SaaS */}
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={112}
                      height={114}
                      src={Service26}
                      alt="Service Icon - Enterprise Software & SaaS"
                    />
                    <h3 className="service__title-2">
                      Enterprise Software & <br />
                      SaaS
                    </h3>
                    <p>
                      Delivering scalable enterprise solutions and
                      Software-as-a-Service applications for businesses.
                    </p>
                    <ul>
                      <li>+ Business Intelligence Tools</li>
                      <li>+ Cloud Integration</li>
                      <li>+ Subscription Models</li>
                    </ul>
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

export default ServiceElementV3;
