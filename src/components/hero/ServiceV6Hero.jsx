import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png"; // Update with shapes that resonate with Mastery House's branding
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png"; // Update with shapes that resonate with Mastery House's branding
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png"; // Update with shapes that resonate with Mastery House's branding
import Shape8 from "../../../public/assets/imgs/home-7/shape-8.svg"; // Update with shapes that resonate with Mastery House's branding
import CodeShape from "../../../public/assets/imgs/home-7/code-shape.svg"; // Update with shapes that resonate with Mastery House's branding
// Update with shapes that resonate with Mastery House's branding

const ServiceV6Hero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Mastery House — Your AI{" "}
                  <Image
                    priority
                    width={100}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="AI Icon"
                  />{" "}
                  Specialist
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Shape8}
                    alt="Mastery House Logo"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about">Service</h2>
                <p>
                  At Mastery House, we harness the power of AI to redefine
                  boundaries and expand horizons. We&apos;re dedicated to
                  empowering businesses with cutting-edge AI solutions, tailored
                  to drive growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="Neural Network"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default ServiceV6Hero;
