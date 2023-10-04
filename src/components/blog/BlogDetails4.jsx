import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog4/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog4/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog4/blog13.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails4 = () => {
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
                  SEO Mastery <span>08 Oct 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Decoding the Power of SEO: Strategies for Maximum Visibility
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
                  alt="Power of SEO"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  The digital realm is crowded. To be seen, businesses need to
                  harness the power of Search Engine Optimization (SEO) – a
                  dynamic force that propels brands to the forefront of online
                  visibility.
                </p>
                <h2>Keyword Optimization</h2>
                <p>
                  The foundation of SEO, keyword optimization involves
                  researching and selecting relevant keywords to attract your
                  target audience. It's not just about volume, but relevance and
                  intent.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Keyword Research"
                />
                <h2>Quality Content & Backlinks</h2>
                <p>
                  While keywords lay the groundwork, quality content entices and
                  retains visitors. Similarly, backlinks from reputable sources
                  enhance your domain authority, signaling to search engines
                  that your site is trustworthy.
                </p>
                <h2>Technical SEO</h2>
                <p>
                  Beyond content, technical SEO ensures that search engines can
                  easily crawl and index your site. This includes optimizing
                  site speed, ensuring mobile-friendliness, and structuring
                  URLs.
                </p>
                <h2>Local SEO & Voice Search</h2>
                <p>
                  With the surge of mobile searches and smart speakers,
                  optimizing for local search and voice queries is becoming
                  indispensable. Local SEO makes you discoverable to nearby
                  customers, while voice search optimization captures the
                  growing segment of voice-activated searches.
                </p>
                <h2>Dive Deep with The Mastery House</h2>
                <p>
                  Want to unlock the full potential of SEO for your brand? The
                  Mastery House team offers tailored SEO solutions to boost your
                  visibility and drive organic traffic. Let's connect and craft
                  a strategy that resonates with your business objectives.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Mastery House SEO Mastery"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">SEO</Link>,{" "}
                  <Link href="/blog">Keyword Optimization</Link>,{" "}
                  <Link href="/blog">Technical SEO</Link>,{" "}
                  <Link href="/tag">Local SEO</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails4;
