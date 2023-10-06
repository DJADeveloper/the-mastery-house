import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog2/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog2/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog2/blog13.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails2 = () => {
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
                  Web Design <span>25 Sep 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Personalized User Experiences: Why Tailored Web Design Matters
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
                  alt="Personalized User Experience"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  The realm of web design has transcended aesthetics. Modern web
                  experiences hinge on personalization, creating tailor-made
                  solutions that resonate deeply with the end-user.
                </p>
                <h2>The Rise of Individual-Centric Web Experiences</h2>
                <p>
                  Gone are the days of generic websites. Today&apos;s user
                  expects an experience that speaks to them directly,
                  understands their needs, and offers solutions intuitively. The
                  benefits? Higher engagement, reduced bounce rates, and a
                  significant boost in conversions.
                </p>

                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="User-Centric Design"
                />
                <h2>Dynamic Content Delivery</h2>
                <p>
                  Dynamic websites adapt in real-time, showcasing content based
                  on user behavior, preferences, and past interactions. This
                  dynamism ensures that users are always presented with content
                  that is most relevant to them.
                </p>
                <h2>Interactivity and User Feedback Loops</h2>
                <p>
                  A personalized web experience is a two-way street. Integrating
                  feedback loops, interactive elements, and AI-driven chatbots
                  can guide the user journey, ensuring their needs are met at
                  every touchpoint.
                </p>
                <h2>Data Privacy: The Double-Edged Sword</h2>
                <p>
                  While personalization enhances user experience, it's vital to
                  strike a balance with data privacy. GDPR, CCPA, and other
                  regulations necessitate transparent data collection practices
                  and the assurance of data security.
                </p>
                <h2>Get Personal with The Mastery House</h2>
                <p>
                  Looking to create a personalized digital experience for your
                  users? The Mastery House crafts tailored web designs that
                  resonate, engage, and convert. Connect with our team and give
                  your users an experience they'll never forget.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Mastery House Web Design"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">Web Design</Link>,{" "}
                  <Link href="/blog">Personalization</Link>,{" "}
                  <Link href="/blog">UX</Link>,{" "}
                  <Link href="/tag">Data Privacy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails2;
