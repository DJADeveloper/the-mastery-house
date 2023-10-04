import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Blog1 from "../../../public/assets/imgs/blog/blog1/blog1-cover.png";
import Blog2 from "../../../public/assets/imgs/blog/blog2/blog2-cover.png";
import Blog3 from "../../../public/assets/imgs/blog/blog3/blog3-cover.png";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBlog = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area no-pb blog__animation">
        <div className="container g-0 line pt-150 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">recent blog</h2>
                <h3 className="sec-title">News insignt</h3>
              </div>
            </div>
            {/* BLOG1 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog1}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog1}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">UI Design</Link> . 18 Sept 2023
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    Decoding the Success DNA: The Digital Landscape in 2023
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
            {/* BLOG2 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details2">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog2}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog2}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">Web Design</Link> . 25 Sep 2023
                </h4>
                <h5>
                  <Link href="/blog-details2" className="blog__title">
                    Personalized User Experiences: Why Tailored Web Design
                    Matters
                  </Link>
                </h5>
                <Link href="/blog-details2" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
            {/* BLOG3 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details3">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog3}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog3}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">Branding</Link> . 30 Sep 2023
                </h4>
                <h5>
                  <Link href="/blog-details3" className="blog__title">
                    The Power of Visual Storytelling in Branding
                  </Link>
                </h5>
                <Link href="/blog-details3" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBlog;
