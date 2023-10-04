import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";

import Blog from "../../../public/assets/imgs/blog/blog1/blog1-cover.png";
import Blog2 from "../../../public/assets/imgs/blog/blog2/blog2-cover.png";
import Blog3 from "../../../public/assets/imgs/blog/blog3/blog3-cover.png";
import Blog4 from "../../../public/assets/imgs/blog/blog4/blog4-cover.png";
import Blog5 from "../../../public/assets/imgs/blog/blog5/blog5-cover.png";
import Blog6 from "../../../public/assets/imgs/blog/blog6/blog6-cover.png";

import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
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

  const blogData = [
    {
      id: 1,
      title: "Decoding the Success DNA: The Digital Landscape in 2023",
      date: "15 March 2023",
      category: "Digital Trends",
      description:
        "As the digital landscape continues to evolve, understanding the key factors driving success is crucial. Dive into the trends and shifts that are shaping the online world in 2023.",
      thumbnail: Blog,
      link: "/blog-details",
    },
    {
      id: 2,
      title: "Personalized User Experiences: Why Tailored Web Design Matters",
      date: "25 Sept 2023",
      category: "Web Design",
      description:
        "In today's online world, a one-size-fits-all approach no longer suffices. Discover why personalized web design is pivotal and how it enhances user experiences.",
      thumbnail: Blog2,
      link: "/blog-details2",
    },
    {
      id: 3,
      title: "The Power of Visual Storytelling in Branding",
      date: "28 March 2023",
      category: "Branding",
      description:
        "Visual narratives have a profound impact on brand perception and recall. Uncover the techniques and benefits of employing visual storytelling in your branding strategy.",
      thumbnail: Blog3,
      link: "/blog-details3",
    },
    {
      id: 4,
      title: "Decoding the Power of SEO: Strategies for Maximum Visibility",
      date: "05 April 2023",
      category: "SEO",
      description:
        "In the vast expanse of the internet, standing out is essential. Delve into SEO strategies that not only boost visibility but also enhance user engagement.",
      thumbnail: Blog4,
      link: "/blog-details4",
    },
    {
      id: 5,
      title: "UX/UI Design: Building for the User’s Journey",
      date: "12 April 2023",
      category: "Design",
      description:
        "Design is not just about aesthetics; it's about the entire user journey. Learn the intricacies of UX/UI design that caters to user needs, ensuring a seamless and memorable experience.",
      thumbnail: Blog5,
      link: "/blog-details5",
    },
    {
      id: 6,
      title: "Storybranding: Crafting Narratives That Connect",
      date: "20 April 2023",
      category: "Branding",
      description:
        "Stories resonate. They evoke emotions and create connections. Dive into the art of storybranding and discover how to craft narratives that truly connect with your audience.",
      thumbnail: Blog6,
      link: "/blog-details6",
    },
  ];

  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  We always <br />
                  think
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Crafting new bright brands, unique visual systems and digital
                  experience focused on a wide range of original collabs.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            {blogData.map((blog, index) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" key={index}>
                <article className="blog__item">
                  <div className="blog__img-wrapper">
                    <Link href={blog.link}>
                      <div className="img-box">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={blog.thumbnail}
                          alt="Blog Thumbnail"
                        />
                      </div>
                    </Link>
                  </div>
                  <h4 className="blog__meta">
                    <Link href={`/category/${blog.category}`}>
                      {blog.category}
                    </Link>{" "}
                    . {blog.date}
                  </h4>
                  <h5>
                    <Link href={blog.link} className="blog__title">
                      {blog.title}
                    </Link>
                  </h5>
                  <Link href={`${blog.link}-dark`} className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
