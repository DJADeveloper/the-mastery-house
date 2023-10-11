import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial31 from "../../../public/assets/imgs/feature/4/1.png";
import Testimonial32 from "../../../public/assets/imgs/feature/4/2.png";
import Testimonial33 from "../../../public/assets/imgs/icon/4.png";
import Testimonial34 from "../../../public/assets/imgs/testimonial/3/4.jpg";
import Testimonial35 from "../../../public/assets/imgs/logo/large-white-no-tmh-logo.png";
import Testimonial36 from "../../../public/assets/imgs/logo/large-white-no-tmh-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTestimonial = () => {
  const testimonialArea = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

        gsap.to(".animation_image_zoom img", {
          scrollTrigger: {
            trigger: ".testimonial__area-3",
            start: "top center+=200",
            markers: false,
          },
          opacity: 1,
          scale: 1,
          x: 20,
          ease: "power2.out",
          duration: 2.5,
          stagger: {
            each: 0.3,
          },
        });
        function imageMoving(wrapper, image_list) {
          let container = wrapper;
          try {
            if (container) {
              container.addEventListener("mousemove", (e) => {
                var x = e.clientX;
                var y = e.clientY;
                let viewportWidth = window.innerWidth;
                let viewportHeight = window.innerHeight;
                let center = viewportWidth / 2;
                let centerHeight = innerHeight / 2;

                if (x > center) {
                  gsap.to(image_list, {
                    x: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    x: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
                if (y > centerHeight) {
                  gsap.to(image_list, {
                    y: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    y: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
        imageMoving(testimonialArea.current, ".testimonial__area-3 img");
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="testimonial__area-3" ref={testimonialArea}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div>
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={0}
                  slidesPerView={1}
                  freeMode={true}
                  loop={true}
                  speed={2000}
                  navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button",
                  }}
                  className="testimonial__slider-3"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Mastery House is the epitome of professionalism and
                          innovation. They have reshaped our digital presence
                          with a keen understanding of our vision and the market
                          dynamics. They not just deliver services but build
                          relationships grounded in trust and mutual growth.
                          Exceptional service every step of the way.
                        </p>
                        <h2 className="client__name-3">Shereve </h2>
                        <h3 className="client__role-3">Northwood Manor</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Our journey with Mastery House has been nothing short
                          of spectacular. Their detail-oriented approach and
                          relentless pursuit of perfection have provided us with
                          solutions that are not only visually stunning but
                          highly functional, setting a new benchmark in digital
                          excellence. I cannot recommend them enough.
                        </p>
                        <h2 className="client__name-3">Cameron </h2>
                        <h3 className="client__role-3">Touch Of Excellence</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          The Mastery House has truly transformed our event
                          planning business. When we wanted to elevate our
                          brand&apos;s digital presence, their team took the
                          time to understand our ethos, our clientele, and the
                          intricacies of the events we design. The result? An
                          incredibly sophisticated and user-friendly website
                          that not only showcases our work in the best light but
                          also makes client interactions seamless.
                        </p>
                        <h2 className="client__name-3">Dylan</h2>
                        <h3 className="client__role-3">Kind Of Big Dyl</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          Mastery House has been a cornerstone in our
                          brand&apos;s development. Their team is filled with
                          master craftsmen who poured creativity and expertise
                          into our projects, crafting a digital space that
                          speaks our brand language fluently. It&apos;s more
                          than a service, it&apos;s a partnership for success.
                        </p>
                        <h2 className="client__name-3">Mario</h2>
                        <h3 className="client__role-3">
                          Founder - A+ Roofing Excellence
                        </h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          If you&apos;re looking to elevate your brand and truly
                          connect with your audience in meaningful ways, I
                          can&apos;t recommend The Mastery House enough.
                          They&apos;re not just experts in their field;
                          they&apos;re visionaries.
                        </p>
                        <h2 className="client__name-3">Maria</h2>
                        <h3 className="client__role-3">Managing Director</h3>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__images-3 animation_image_zoom">
          {/* <Image
            priority
            width={245}
            height={278}
            src={Testimonial35}
            alt="testimonial Image"
            className="testimonial3__img"
          /> */}
          {/* <Image
            priority
            width={90}
            height={100}
            src={Testimonial32}
            alt="testimonial Image"
            className="testimonial3__img-2"
          /> */}
          {/* <Image
            priority
            width={110}
            height={130}
            src={Testimonial33}
            alt="testimonial Image"
            className="testimonial3__img-3"
          /> */}
          <Image
            priority
            width={330}
            height={430}
            src={Testimonial34}
            alt="testimonial Image"
            className="testimonial3__img-4"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingTestimonial;
