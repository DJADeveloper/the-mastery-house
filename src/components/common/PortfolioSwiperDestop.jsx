import { useEffect, useRef, useState } from "react";
import {
  Mousewheel,
  EffectFade,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Portfolio1 from "../../../public/assets/imgs/portfolio/1/laptop-portfolio.png";
import Shape16 from "../../../public/assets/imgs/shape/16.png";
import Social1 from "../../../public/assets/imgs/socials/fb.svg";
import Social2 from "../../../public/assets/imgs/socials/ig.svg";
import Social3 from "../../../public/assets/imgs/socials/in.svg";
import Social4 from "../../../public/assets/imgs/socials/x.svg";
import Portfolio11 from "../../../public/assets/imgs/portfolio/1/work-05.jpg";
import Portfolio12 from "../../../public/assets/imgs/portfolio/1/work-06.png";
import Portfolio13 from "../../../public/assets/imgs/portfolio/1/work-01.jpg";
import Portfolio14 from "../../../public/assets/imgs/portfolio/1/work-04.jpg";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import DigitalAgencyHero from "../hero/DigitalAgencyHero";

import Contact1 from "../contact/Contact1";

const PortfolioSwiperDestop = ({ portfolioSection, portfolioHeroImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };

  return (
    <>
      <div className="portfolio__main-slider2">
        <Swiper
          modules={[Mousewheel, EffectFade, Pagination]}
          spaceBetween={0}
          effect={"fade"}
          mousewheel={true}
          allowTouchMove={false}
          slidesperview={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <section className=" portfolio-section">
              <DigitalAgencyHero />
              {/* <DigitalAgencyRoll /> */}
            </section>
          </SwiperSlide>
          {/* About */}
          <SwiperSlide>
            <section className="portfolio-section portfolio__about pt-140 pb-150">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-8 col-xxl-8 col-lg-8">
                    <div className="portfolio__about-left">
                      <h2 className="sec-title">
                        The Mastery House<span> Where Creativity</span> Meets
                        Innovation
                      </h2>
                      <Image
                        priority
                        width={274}
                        height={106}
                        src={Shape16}
                        alt="Shape"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                    <div className="sec-text">
                      <p>
                        From the bustling digital hubs to the quiet corners of
                        innovation, The Mastery House stands tall as a beacon of
                        transformative creativity. More than just a digital
                        agency, we are curators of the future, intricately
                        blending strategy, design, and groundbreaking technology
                        into unparalleled digital masterpieces. Serving
                        globally-renowned brands and ambitious startups alike,
                        we sculpt digital experiences that resonate, inspire,
                        and consistently deliver unmatched results
                      </p>
                      <Link
                        href="/about-dark"
                        className="wc-btn-dark btn-hover "
                      >
                        Let`s Talk
                      </Link>
                      {/* <div className="btn_wrapper">
                        <Link
                          href="/contact-dark"
                          className="wc-btn-primary btn-hover btn-item"
                        >
                          <span></span>Let’s Talk!
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="about-row">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                      <div className="brand-title-wrap">
                        <h3 className="brand-title">
                          Let's Connect. Follow Us
                        </h3>
                      </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                      <div className="brand-list">
                        <div className="brand-logo">
                          <Image
                            priority
                            width={97}
                            height={67}
                            src={Social1}
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="brand-logo">
                          <Image
                            priority
                            width={85}
                            height={67}
                            src={Social2}
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="brand-logo">
                          <Image
                            priority
                            width={114}
                            height={64}
                            src={Social3}
                            alt="Brand Logo"
                          />
                        </div>
                        <div className="brand-logo">
                          <Image
                            priority
                            width={82}
                            height={70}
                            src={Social4}
                            alt="Brand Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          {/* Services */}
          <SwiperSlide>
            <section className="portfolio-section portfolio__service pt-110 pb-110">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                    <h2 className="sec-title">Services Tailored For You.</h2>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                    <div className="sec-text">
                      <p>
                        At The Mastery House, we blend innovation with
                        expertise. From dynamic Digital Marketing campaigns to
                        state-of-the-art Software Development and cutting-edge
                        AI solutions, we craft experiences that redefine
                        boundaries. Explore our offerings tailored for
                        transformative results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="portfolio__service-list">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="portfolio__service-item">
                        <Link href="/service-dark">
                          <h3 className="ps-title">
                            Digital <br /> Marketing
                          </h3>
                          <ul>
                            <li>+ Content Strategy</li>
                            <li>+ Social Media Campaigns</li>
                            <li>+ SEO & SEM</li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="portfolio__service-item">
                        <Link href="/service-v3-dark">
                          <h3 className="ps-title">
                            Software
                            <br /> Developemnt
                          </h3>
                          <ul>
                            <li>+ React</li>
                            <li>+ Python</li>
                            <li>+ Web3</li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="portfolio__service-item">
                        <Link href="/service-v6-dark">
                          <h3 className="ps-title">
                            Artificial
                            <br /> Intelligence
                          </h3>
                          <ul>
                            <li>+ Machine Learning</li>
                            <li>+ Chatbots </li>
                            <li>+ Predictive Analysis</li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="ps-btn">
                      <Link href="/contact-dark">
                        See How We {""}
                        <strong>Do It</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="portfolio-section portfolio__project">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="pp-title-wrap">
                      <h2 className="pp-title">
                        Selected <br /> Work
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                    <div className="pp-slider-wrapper">
                      <Swiper
                        modules={[Navigation, Thumbs]}
                        spaceBetween={10}
                        loop={true}
                        navigation={{
                          nextEl: ".pp-next",
                          prevEl: ".pp-prev",
                        }}
                        thumbs={{
                          swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                              ? thumbsSwiper
                              : null,
                        }}
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio11}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio12}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio13}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio14}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>

                      <div
                        style={{ cursor: "pointer" }}
                        className="pp-next swipper-btn"
                      >
                        prev
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="pp-prev swipper-btn"
                      >
                        Next
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                    <Swiper
                      // modules={[Thumbs, FreeMode]}
                      spaceBetween={10}
                      // loop={true}
                      slidespreview={1}
                      // freeMode={true}
                      // watchSlidesProgress
                      allowTouchMove={false}
                      className="portfolio__project-thumbs"
                      onSwiper={setThumbsSwiper}
                    >
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">Apple book cover</h3>
                          <p>March 2021</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">Apple book cover</h3>
                          <p>March 2021</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">Apple book cover</h3>
                          <p>March 2021</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">Apple book cover</h3>
                          <p>March 2021</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          {/* Portfolio */}
          <SwiperSlide>
            <section className=" portfolio-section " ref={portfolioSection}>
              <div className="container ">
                <div className="row pt-140 ">
                  <div className="col-xxl-12 d-flex">
                    <div className="portfolio__hero ">
                      <div>
                        <h1 className="title shape-circle">What</h1>
                        <h2 className="title text-stroke">We </h2>
                        <h2 className="title">Do</h2>
                      </div>
                      <div>
                        <Image
                          priority
                          width={800}
                          style={{
                            height: "auto",
                            marginLeft: "80%",
                            marginBottom: "20%",
                          }}
                          src={Portfolio1}
                          alt="Personal Portfolio"
                          className="pp-thumb"
                          ref={portfolioHeroImg}
                        />
                      </div>
                      <div className="btn-wrapper">
                        <Link href="/portfolio-dark" className="wc-btn-dark">
                          View all work
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>{" "}
          {/* Testimonial */}
          {/* <SwiperSlide>
            <section className="portfolio-section  ">
              <DigitalMarketingTestimonial />
            </section>
          </SwiperSlide> */}
          {/* Blog */}
          {/* <SwiperSlide>
            <section className="portfolio-section ">
              <StartupAgencyBlog />
            </section>
          </SwiperSlide> */}
          {/* Contact */}
          <SwiperSlide>
            <section className="portfolio-section  ">
              <Contact1 />
            </section>
          </SwiperSlide>
          {/* Team */}
          {/* <SwiperSlide>
            <section className="portfolio-section p-5 ">
              <Team />
            </section>
          </SwiperSlide> */}
          <div className="swiper-pagination circle-pagination-2"></div>
        </Swiper>
      </div>
    </>
  );
};
export default PortfolioSwiperDestop;
