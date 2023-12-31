import Story1 from "../../../public/assets/imgs/story/1..png";
import Story2 from "../../../public/assets/imgs/story/2..png";
import Story3 from "../../../public/assets/imgs/story/3..png";
import Story4 from "../../../public/assets/imgs/story/4..png";
import Story5 from "../../../public/assets/imgs/story/5.png";
import Story6 from "../../../public/assets/imgs/story/6.png";
import logo from "../../../public/assets/imgs/logo/logo-1.svg";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>2019</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our story</h3>
                <div className="story__img-wrapper img-anim hide-on-computer">
                  <Image
                    priority
                    width={520}
                    style={520}
                    src={logo}
                    alt="Story Thumbnail"
                    data-speed="auto"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Your brand is the most important asset in your company let
                    our team of professionals help you with a good strategy took
                    the runway next with an edgy collection featuring dyed denim
                    pieces. The collection included patchwork denim, a trend
                    that has recently exploded in younger generations. Playing
                    on aspects of sustainability, the pieces appeared to be
                    upcycled to establish dimension and flair. This take on
                    grunge and streetwear took sustainable fashion to an
                    entirely new level.
                  </p>
                  <p>
                    ur specialized team of researchers, strategists, designers,
                    developers, and project managers work with streamlined
                    processes to break through organizational roadblocks. We
                    translate research into solutions, crafting thoughtful and
                    unified brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 hide-on-mobile">
              <div className="story__img-wrapper hide-on-mobile">
                <Image
                  priority
                  width={600}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 logo">
              <div className="story__img-wrapper img-anim hide-on-mobile">
                <Image
                  priority
                  width={520}
                  style={{ height: "520px" }}
                  src={logo}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 hide-on-mobile">
              <div className="story__img-wrapper hide-on-mobile ">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story5}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .hide-on-mobile {
            display: block; // By default, the image is displayed
          }
          .hide-on-computer {
            display: block; // Hide on computer
          }
          .logo {
            margin-top: 0px;
            margin-bottom: 0px;
          }

          @media screen and (min-width: 1400px) {
            .hide-on-computer {
              display: none;
            }
          }
          @media screen and (min-width: 1200px) and (max-width: 1399px) {
            .hide-on-computer {
              display: none;
            }
          }
          @media screen and (max-width: 767px) {
            .hide-on-mobile {
              display: none; // Hide on mobile
            }
          }
          @media screen and (max-width: 991px) {
            .hide-on-mobile {
              display: none; // Hide on mobile
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutStory;
