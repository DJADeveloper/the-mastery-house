import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.png";
import Service12 from "../../../public/assets/imgs/service/content-creation2.svg";
import Service13 from "../../../public/assets/imgs/service/social-media.svg";
import Service14 from "../../../public/assets/imgs/service/social-ads.svg";
import Service15 from "../../../public/assets/imgs/service/seo.svg";
import Service16 from "../../../public/assets/imgs/service/logo-design.svg";
import Service17 from "../../../public/assets/imgs/service/email.svg";
import Service18 from "../../../public/assets/imgs/service/email-marketing2.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">Storybranding</a>
                    </li>
                    <li>
                      <a href="#service_2">Content Creation</a>
                    </li>
                    <li>
                      <a href="#service_3">Social Media Marketing</a>
                    </li>
                    <li>
                      <a href="#service_4">Social Media Advertising</a>
                    </li>
                    <li>
                      <a href="#service_5">SEO</a>
                    </li>
                    <li>
                      <a href="#service_6">Logo Creation</a>
                    </li>
                    <li>
                      <a href="#service_7">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#service_8">Email Marketing Management</a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service16}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service17}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service18}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        {/* Add your image for Storybranding here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Storybranding</h2>
                        <p>
                          Storybranding is a method of crafting your
                          brand&apos;s message to resonate with your
                          audience&apos;s desires and challenges. Through
                          understanding and positioning, we transform your
                          brand&apos;s narrative into a compelling story that
                          captivates and converts.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        {/* Add your image for Content Creation here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Content Creation</h2>
                        <p>
                          Effective content is the backbone of digital presence.
                          We craft compelling, SEO-friendly content tailored to
                          your audience, from blog posts and articles to videos,
                          infographics, and more. Our content not only engages
                          but also drives action.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        {/* Add your image for Social Media Marketing here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Social Media Marketing
                        </h2>
                        <p>
                          We strategize and manage your brand&apos;s presence
                          across major social platforms, engaging your audience
                          and expanding your reach. Through curated posts and
                          targeted engagement strategies, we elevate your
                          brand&apos;s voice in the social sphere.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        {/* Add your image for Social Media Advertising here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Social Media Advertising
                        </h2>
                        <p>
                          Unlock the potential of paid social campaigns. Our
                          team targets the right audience with optimized ads,
                          ensuring your brand message reaches those who matter.
                          From setup to monitoring, we handle all aspects to
                          maximize ROI.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        {/* Add your image for SEO here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">SEO</h2>
                        <p>
                          Rise above the digital noise. Our SEO experts optimize
                          your online presence, improving visibility on search
                          engines. Through keyword research, content
                          optimization, and technical audits, we ensure you're
                          found by those seeking your services.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        {/* Add your image for Logo Creation here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Logo Creation</h2>
                        <p>
                          Your logo is your brand&apos;s first impression. We
                          craft unique and memorable logos that resonate with
                          your brand&apos;s essence. Through a fusion of
                          creativity and strategy, we ensure your logo stands
                          out and speaks volumes.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_7"
                      data-secid="7"
                    >
                      <div className="image-tab">
                        {/* Add your image for Email Marketing here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Email Marketing</h2>
                        <p>
                          Directly reach your audience&apos;s inbox with
                          compelling campaigns. We design, segment, and send
                          impactful email campaigns that foster brand loyalty
                          and drive conversions. Personalized and timely, our
                          approach maximizes engagement.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_8"
                      data-secid="8"
                    >
                      <div className="image-tab">
                        {/* Add your image for Email Marketing Management here */}
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Email Marketing Management
                        </h2>
                        <p>
                          From list management to tracking performance, we
                          handle all facets of your email marketing endeavors.
                          We optimize campaigns based on insights, ensuring
                          continual improvement and engagement. Stay connected
                          with your audience effortlessly.
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Learn More
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
