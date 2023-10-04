import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.svg";
import Detail1 from "../../../public/assets/imgs/blog/blog6/blog11.png";
import Detail2 from "../../../public/assets/imgs/blog/blog6/blog12.png";
import Detail3 from "../../../public/assets/imgs/blog/blog6/blog13.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails6 = () => {
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
                  Branding Insights <span>28 Sept 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Storybranding: Crafting Narratives That Connect
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
                  alt="Storybranding Concept"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  In a world brimming with content and information, storytelling
                  emerges as a beacon of connection. Storybranding isn't just
                  about promoting products; it's about creating authentic
                  narratives that resonate with audiences on a deeper, emotional
                  level.
                </p>
                <h2>More than Marketing</h2>
                <p>
                  Storybranding transcends traditional marketing. Instead of
                  focusing solely on features and benefits, it presents a
                  journey – one where the brand and the audience embark on a
                  shared adventure.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Audience Connection"
                />
                <h2>The Power of Emotion</h2>
                <p>
                  A compelling story evokes emotion. Emotion drives connection,
                  loyalty, and trust. Through storytelling, brands can establish
                  a memorable identity and cultivate lasting relationships with
                  their audience.
                </p>
                <h2>Let's Craft Your Brand's Story</h2>
                <p>
                  At The Mastery House, we're passionate about stories. We'll
                  help you delve into the core of your brand, unraveling tales
                  that inspire and captivate. Let's connect, share, and grow
                  together through the magic of storybranding.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Mastery House Storytelling"
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: <Link href="/blog">Storybranding</Link>,{" "}
                  <Link href="/blog">Narrative Marketing</Link>,{" "}
                  <Link href="/blog">Emotional Connection</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails6;
