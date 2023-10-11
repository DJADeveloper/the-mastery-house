import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Chatbots <span>& Virtual Assistants</span>
                  </h3>
                  <p>
                    Design and deploy AI-driven chatbots for various
                    applications, handling customer queries, appointments, and
                    more.
                  </p>
                  <ul>
                    <li>+ Web Integration</li>
                    <li>+ Conversational Flows</li>
                    <li>+ Multi-platform Support</li>
                  </ul>
                </div>

                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Predictive <span>Analytics</span>
                  </h3>
                  <p>
                    Offer insights into future trends, sales forecasting, and
                    customer behavior prediction.
                  </p>
                  <ul>
                    <li>+ Data Analysis</li>
                    <li>+ Trend Forecasting</li>
                    <li>+ Business Intelligence</li>
                  </ul>
                </div>

                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Natural Language <span>Processing</span>
                  </h3>
                  <p>
                    Provide sentiment analysis, content summarization, and
                    keyword extraction services.
                  </p>
                  <ul>
                    <li>+ Sentiment Analysis</li>
                    <li>+ Content Summarization</li>
                    <li>+ Keyword Extraction</li>
                  </ul>
                </div>

                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Image & Video <span>Analysis</span>
                  </h3>
                  <p>
                    Offer object recognition and user content moderation
                    services.
                  </p>
                  <ul>
                    <li>+ Object Recognition</li>
                    <li>+ Content Moderation</li>
                    <li>+ Visual Insights</li>
                  </ul>
                </div>

                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Recommendation <span>Systems</span>
                  </h3>
                  <p>
                    Design recommendation algorithms for various platforms based
                    on user behavior.
                  </p>
                  <ul>
                    <li>+ Product Suggestions</li>
                    <li>+ Media Recommendations</li>
                    <li>+ Personalized Content</li>
                  </ul>
                </div>

                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Process <span>Automation</span>
                  </h3>
                  <p>
                    Integrate Robotic Process Automation (RPA) with AI for
                    automating repetitive tasks.
                  </p>
                  <ul>
                    <li>+ Data Entry Automation</li>
                    <li>+ Form Submissions</li>
                    <li>+ Workflow Improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyService;
