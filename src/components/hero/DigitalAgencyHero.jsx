import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link.js";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import SideWaysLogo from "../../../public/assets/imgs/logo/site-logo-white-sideways.png";
import logo from "../../../public/assets/imgs/logo/large-white-logo.png";
import Hero1bg from "../../../public/assets/imgs/hero/1/1-bg.png";
import Image from "next/image.js";

const DigitalAgencyHero = () => {
  const heroTitle = useRef();
  const heroSubTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "chars words",
        });

        gsap.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_hero__subtitle.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                {/* <Link href="/service">
                  Strategy, Design, Solution Development{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> */}
                <h2 className="hero__title" ref={heroTitle}>
                  The Mastery
                  <br />
                  House
                </h2>
                {/* <div className="hero__title" ref={heroTitle}>
                  <video autoPlay muted loop height={600} width={800}>
                    <source src="assets/video/Logo.mp4" type="video/mp4" />
                  </video>
                </div> */}
                <div className="hero__title-wrapper">
                  <p className="hero__sub-title" ref={heroSubTitle}>
                    Merging technology and creativity, we embody{" "}
                    <span>creative problem-solving</span> to craft unique
                    experiences.
                  </p>
                </div>{" "}
                <Image
                  priority
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />
                <div className="experience">
                  <h2 className="title">25k+</h2>
                  <p>
                    Projects completed <br />
                    successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          style={{ width: "auto", height: "auto" }}
          src={Hero1bg}
          alt="image"
          className="hero1_bg"
        />
      </section>
    </>
  );
};

export default DigitalAgencyHero;
