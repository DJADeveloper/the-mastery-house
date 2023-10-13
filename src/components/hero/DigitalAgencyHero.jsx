import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const heroTitle = useRef();
  const heroSubTitle = useRef();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        // Change 767 to any breakpoint you want for mobile
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Run once on component mount to set initial state
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);
    // Clean-up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile, "is it mobile");

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
      <section
        className="hero__area"
        style={{ position: "relative", height: "100vh" }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="assets/video/Tmh_video.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-10 col-md-10 col-sm-12">
              <div
                className="hero__content animation__hero_one"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 200,
                  textAlign: "center",
                }}
              >
                <h2
                  className={!isMobile ? "hero__title" : "fs-2"}
                  ref={heroTitle}
                >
                  Welcome to
                  <span>
                    <h4>The Mastery House</h4>
                  </span>
                  <div className="d-flex justify-content-center mt-5 ">
                    <Link
                      href="/about-dark"
                      className="wc-btn-primary btn-hover d-flex "
                    >
                      <p>Your Digital Story</p>
                    </Link>
                  </div>
                </h2>
              </div>
              {!isMobile && (
                <div className="hero__sub-section">
                  <p className="hero__sub-title" ref={heroSubTitle}>
                    Merging technology and creativity, we embody{" "}
                    <span>creative problem-solving</span> to craft unique
                    experiences.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyHero;
