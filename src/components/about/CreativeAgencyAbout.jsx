import { useEffect } from "react";
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

  // Conditionally apply the "d-flex" class based on device width
  const deviceWidth = window.innerWidth;
  const aboutMidClasses =
    deviceWidth < 1025
      ? "about__mid-7"
      : "about__mid-7 d-flex justify-content-between";

  return (
    <>
      {/* Video/Image Section */}
      <div className="video__area about__img-2">
        <Image
          priority
          width={deviceWidth < 1025 ? 300 : 1000}
          height={deviceWidth < 1025 ? 200 : 600}
          src={Video}
          alt="Video Image"
          data-speed="0.2"
        />
      </div>

      {/* About Section */}
      <section className="about__area-7">
        <div className="container pt-4 pb-4">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  The Mastery House <br /> Story.
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className={aboutMidClasses}>
                <p>
                  At The Mastery House, our journey began with a singular
                  vision: to empower businesses by unlocking their digital
                  potential...
                </p>
                <p>
                  Our story is one of relentless determination and a pursuit of
                  excellence, underpinned by our core belief that &quot;Your
                  Success is Our Code.&quot; At The Mastery House, we don’t just
                  build digital experiences; we build connections, fostering
                  relationships with our clients...
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={76}
          height={119}
          src={Shape4}
          alt="Shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default CreativeAgencyAbout;
