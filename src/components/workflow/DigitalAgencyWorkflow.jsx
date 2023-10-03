import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

import "swiper/css";
import "swiper/css/free-mode";

gsap.registerPlugin(ScrollTrigger);

const MasteryHouseWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.set(".fade_left", { x: -20, opacity: 0 });
      gsap.to(".fade_left", {
        scrollTrigger: {
          trigger: ".fade_left",
          start: "top center+=300",
        },
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
          each: 0.2,
        },
      });
    }
  }, []);

  const steps = [
    {
      number: "01",
      title: "Digital Needs Assessment",
      description: "Understand the client's business model and digital needs.",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "Design a comprehensive digital strategy tailored to client objectives.",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Craft visually stunning and functional digital assets.",
    },
    {
      number: "04",
      title: "Digital Marketing & Branding",
      description: "Initiate campaigns across platforms for maximum reach.",
    },
    {
      number: "05",
      title: "SEO & Content Strategy",
      description: "Implement SEO strategies and create high-quality content.",
    },
    {
      number: "06",
      title: "Performance Analytics & Feedback",
      description: "Monitor performance and engage in iterative refinements.",
    },
    {
      number: "07",
      title: "Maintenance & Support",
      description: "Offer continued support, updates, and upgrades.",
    },
    {
      number: "08",
      title: "Growth & Scaling",
      description:
        "Reassess and introduce advanced solutions as business grows.",
    },
  ];

  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Workflow</h2>
                <h3 className="sec-title title-anim">How we work</h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freemode="true"
                loop={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {steps.map((step, index) => (
                  <SwiperSlide key={index}>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{`Step ${step.number}`}</h4>
                      <h5 className="workflow__number">{step.number}</h5>
                      <h6 className="workflow__title">{step.title}</h6>
                      <p>{step.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasteryHouseWorkflow;
