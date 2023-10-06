import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog5/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog5/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog5/blog13.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails5 = () => {
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
                  Design Insights <span>22 Oct 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  UX/UI Design: Building for the User’s Journey
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
                      Written by <span>The Mastery House Team</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>4 min read</span>
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
                  alt="User Journey"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  At the heart of every impactful digital experience lies
                  thoughtful UX/UI design. It&apos;s a delicate balance between
                  functionality and aesthetics, shaping the way users interact
                  with and perceive your brand.
                </p>
                <h2>Understanding the User&apos;s Perspective</h2>
                <p>
                  The foundation of any UX/UI design should be a deep
                  understanding of the end user. Their needs, preferences, and
                  pain points guide the design process, ensuring the final
                  product is intuitive and user-centric.
                </p>

                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="User Perspective"
                />
                <h2>Consistency is Key</h2>
                <p>
                  A consistent design promotes familiarity. Whether it&apos;s a
                  consistent color scheme, typography, or layout, ensuring
                  uniformity across your platform enhances the user experience.
                </p>
                <h2>Feedback Loops and Iteration</h2>
                <p>
                  The design process is iterative. By continuously collecting
                  feedback and making adjustments, you ensure that the design
                  remains aligned with user expectations and industry best
                  practices.
                </p>
                <h2>Collaborate with The Mastery House</h2>
                <p>
                  Looking to elevate your digital presence with impeccable UX/UI
                  design? The Mastery House is committed to crafting
                  user-centric designs that resonate and engage. Let&apos;s
                  collaborate and make your digital vision a reality.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Mastery House UX/UI Design"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">UX/UI Design</Link>,{" "}
                  <Link href="/blog">User-Centric</Link>,{" "}
                  <Link href="/blog">Feedback Loops</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails5;
