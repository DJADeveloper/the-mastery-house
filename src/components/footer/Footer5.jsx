import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRight from "../../../public/assets/imgs/portfolio/11/arrow-right.png";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { useEffect, useRef } from "react";

export default function Footer5() {
  const menuAnim = useRef();
  const menuAnim2 = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation(menuAnim);
    }
    if (menuAnim2.current) {
      menuAnimation(menuAnim2);
    }
  }, []);
  const menuAnimation = (data) => {
    let rootParent = data.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };
  return (
    <>
      <footer className="footer__area-8 pt-120">
        <div className="footer__top-2 text-anim">
          <div className="contact_wrap">
            <div className="roll__slider">
              <Swiper
                modules={[FreeMode, Autoplay]}
                spaceBetween={60}
                slidesPerView={1}
                freeMode={true}
                loop={true}
                centeredSlides={true}
                allowTouchMove={false}
                speed={10000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <h2 className="rollslide_title-1">
                      {"let's"} <span> Talk </span>
                    </h2>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h2 className="rollslide_title-1">
                      {"let's"} <span> Talk </span>
                    </h2>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>

            <Link href="/contact-dark" className="link">
              Say Hello
            </Link>
          </div>
        </div>
        <div className="footer_categories">
          <div className="categories_item">
            <h4 className="cat_title text-white">follow us</h4>
            <ul className="cat_links menu-anim" ref={menuAnim2}>
              <li>
                <a href="https://www.facebook.com/themasteryhouse">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/themasteryh">twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/themasteryhouse/">
                  instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/the-mastery-house-727664204/">
                  linkedin
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="categories_item l_item">
            <h4 className="cat_title">newsletter</h4>
            <div className="footer__subscribe-2">
              <form action="#">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit" className="submit">
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={ArrowRight}
                    alt="Arrow Icon"
                  />
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="footer__copyright-8">
          <p>
            © Alrights reserved by{" "}
            <a href="https://wealcoder.com/" target="_blank">
              The Mastery House
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
