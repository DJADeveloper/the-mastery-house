import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "@/plugins";
import A1 from "../../../public/assets/imgs/home-7/a1.jpg";
import Video from "../../../public/assets/imgs/home-7/video.jpg";
import Shape4 from "../../../public/assets/imgs/home-7/shape-4.png";
import Shape5 from "../../../public/assets/imgs/home-7/shape-5.png";
import A2 from "../../../public/assets/imgs/home-7/a2.jpg";
import A3 from "../../../public/assets/imgs/home-7/a3.jpg";
import M from "../../../public/assets/imgs/home-7/m.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CreativeAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let deviceWidth = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: deviceWidth < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditionally apply the "d-flex" class based on device width
  const deviceWidth = windowWidth;
  const aboutMidClasses =
    deviceWidth < 1025
      ? "about__mid-7"
      : "about__mid-7 d-flex justify-content-between";

  return (
    <>
      {/* Video/Image Section */}
      {/* <div className="video__area about__img-2">
        <Image
          priority
          width={deviceWidth < 1025 ? 300 : 1000}
          height={deviceWidth < 1025 ? 200 : 600}
          src={Video}
          alt="Video Image"
          data-speed="0.2"
        />
      </div> */}

      {/* About Section */}
      <section className="about__area-7">
        <div className="container pt-4 pb-4">
          <div
            className="row"
            style={windowWidth <= 768 ? { display: "none" } : {}}
          >
            <div className="col-xxl-12 ">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim ">
                  The Mastery House <br /> Story.
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className={aboutMidClasses}>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <p className="col-md-6 pr-md-3">
                    At The Mastery House, our journey began with a vision: to
                    empower businesses by unlocking their potential in the
                    digital landscape. With innovation at our core, we
                    seamlessly blend creativity with technology, creating
                    solutions that set new benchmarks and drive growth for our
                    clients. Our team of dedicated professionals, equipped with
                    in-depth knowledge and vast experience, collaborate closely
                    with our partners, ensuring that every project we undertake
                    not only meets but exceeds expectations. We believe in a
                    holistic approach, focusing on understanding our
                    clients&apos; needs and tailoring solutions that align with
                    their goals.
                  </p>
                  <p className="col-md-6 pl-md-3">
                    Our story is a testament to relentless determination and a
                    pursuit of excellence. It&apos;s a narrative driven by our
                    belief that &quot;Your Success is Our Code.&quot; Beyond
                    developing digital experiences, at The Mastery House, we
                    prioritize building enduring connections, nurturing and
                    fostering relationships with our clientele, ensuring we grow
                    together in this digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={windowWidth <= 768 ? { display: "none" } : {}}>
          <Image
            priority
            width={76}
            height={119}
            src={Shape4}
            alt="Shape"
            className="shape-1"
          />
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyAbout;
