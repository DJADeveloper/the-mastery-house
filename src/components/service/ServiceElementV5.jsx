import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <div>
      <section className="portfolio__service service-v5 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title">Services Tailored For You.</h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text">
                <p>
                  At The Mastery House, we blend innovation with expertise. From
                  dynamic Digital Marketing campaigns to state-of-the-art
                  Software Development and cutting-edge AI solutions, we craft
                  experiences that redefine boundaries. Explore our offerings
                  tailored for transformative results.
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
    </div>
  );
};

export default ServiceElementV5;
