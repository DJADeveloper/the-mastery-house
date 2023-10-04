import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog1/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog1/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog1/blog13.png";

import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
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
                  Digital Landscape <span>18 Sep 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Decoding the Success DNA: The Digital Landscape in 2023
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
                  alt="Digital Transformation Illustration"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  In an ever-evolving digital realm, 2023 marks a year of
                  significant transformation. With technology driving
                  innovations at lightning speed, it's crucial to decode the
                  "success DNA" of this landscape.
                </p>
                <h2>The Advent of AI-driven Solutions</h2>
                <p>
                  AI has moved from being a mere buzzword to a pivotal element
                  in business strategies. Companies leveraging AI-driven
                  insights are outpacing competitors, refining customer
                  experiences, and optimizing operations. The era of intelligent
                  analytics, chatbots, and predictive behavior models is upon
                  us, shaping the future.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="AI Solutions"
                />
                <h2>Quantum Leap with Quantum Computing</h2>
                <p>
                  Quantum computing, although in its nascent stage, is promising
                  a revolution. It's anticipated to solve complex problems in
                  seconds, which traditional computers might take millennia to
                  crack.
                </p>
                <h2>Augmented Reality: Merging Worlds</h2>
                <p>
                  Augmented reality (AR) is enhancing user experiences, from
                  gaming to online shopping. It's not just about overlaying
                  information but creating interactive and immersive
                  environments for users.
                </p>
                <h2>Cybersecurity: The Invisible Shield</h2>
                <p>
                  With great digital power comes great responsibility.
                  Cybersecurity is no longer optional; it's a necessity.
                  Ensuring data protection, privacy, and building trust among
                  users is of paramount importance.
                </p>
                <h2>Sustainable Tech: Going Green</h2>
                <p>
                  The call for sustainability is echoing louder than ever. Green
                  technologies, eco-friendly hosting solutions, and
                  energy-saving algorithms are carving a niche, aligning
                  profitability with responsibility.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Sustainable Tech"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">Digital Trends</Link>,{" "}
                  <Link href="/blog">AI</Link>,{" "}
                  <Link href="/blog">Quantum Computing</Link>,{" "}
                  <Link href="/tag">AR</Link>,{" "}
                  <Link href="/tag">Cybersecurity</Link>,{" "}
                  <Link href="/tag">Sustainability</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
