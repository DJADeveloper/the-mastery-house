import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Comprehensive Web & Mobile Development Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    Our team at The Mastery House adopts a meticulous approach
                    to web and mobile development. Every decision aligns with
                    the primary objective: optimizing for our partner&apos;s
                    success. We delve deep, understanding the intricacies of
                    your business to provide bespoke solutions tailored for
                    maximum impact.
                  </p>
                  <p>
                    In an era where uniqueness sets brands apart, we ensure
                    every project is a fresh opportunity to innovate. Through
                    our expertise and dedication, we not only provide
                    development solutions but ensure they translate to tangible
                    results for your business, fostering growth and prominence
                    in the digital realm.
                  </p>
                </div>
                <ul>
                  <li>+ API Development & Integration</li>
                  <li>+ Custom WordPress Development</li>
                  <li>+ Seamless Cloud Migration & Solutions</li>
                  <li>+ Dynamic Front End Development</li>
                  <li>+ Advanced JavaScript Frameworks</li>
                  <li>+ Mobile Development with Flutter Framework</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Web Development Visualization"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev2}
                  alt="Mobile Development Visualization"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
