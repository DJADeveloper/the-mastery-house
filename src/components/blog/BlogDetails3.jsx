import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog3/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog3/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog3/blog13.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails3 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Branding <span>30 Sep 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  The Power of Visual Storytelling in Branding
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Written by <span>Luna Fitzgerald</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>5 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1}
                  alt="Visual Storytelling"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  Storytelling is an ancient art, but its power in the digital
                  age has never been more significant. Visual storytelling in
                  branding weaves a narrative that captures the essence of a
                  brand, making it memorable and relatable.
                </p>
                <h2>More than Just a Logo</h2>
                <p>
                  A brand's story is more than its logo or color palette. It's
                  the emotions, values, and experiences associated with it.
                  Visual elements play a pivotal role in conveying these
                  sentiments efficiently.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Branding Elements"
                />
                <h2>The Emotional Connection</h2>
                <p>
                  Humans are visual creatures. We're drawn to stories,
                  especially those that evoke emotion. Brands that can harness
                  this human tendency through visual storytelling can create
                  lasting connections.
                </p>
                <h2>Consistency Across Touchpoints</h2>
                <p>
                  Whether it's your website, social media profiles, or marketing
                  materials, consistent visual storytelling ensures a unified
                  brand perception, enhancing trust and reliability.
                </p>
                <h2>Embrace Your Brand's Journey</h2>
                <p>
                  Every brand has a unique journey, challenges, victories, and
                  values. Sharing this journey visually can be a potent tool for
                  brand positioning and differentiation.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Brand Journey"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">Branding</Link>,{" "}
                  <Link href="/blog">Storytelling</Link>,{" "}
                  <Link href="/blog">Visual Design</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails3;
