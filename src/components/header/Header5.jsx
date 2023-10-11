import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import NewLogo from "../../../public/assets/imgs/logo/newLogo.svg";
import MenuBlack from "../../../public/assets/imgs/icon/menu-black.png";
import Image from "next/image";

export default function Header5() {
  const [topScroll, setTopScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Assuming 768px as the breakpoint

    const handleTopScroll = () => {
      const position = window.pageYOffset;
      setTopScroll(position);
    };

    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);

  useEffect(() => {
    let header_bg_2 = headerArea.current;
    if (header_bg_2) {
      if (topScroll > 20) {
        header_bg_2.style.background = "#121212";
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
      }
    }
  }, [topScroll]);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };

  // const logoWidth = isMobile
  //   ? topScroll > 20
  //     ? 40
  //     : 80
  //   : topScroll > 20
  //   ? 60
  //   : 100;

  const logoWidth = isMobile ? 40 : 140;

  console.log(isMobile, "MOBILE?");

  return (
    <>
      <header className="header__area-2" ref={headerArea}>
        <div className="header__inner-5">
          <div className="header__logo-5">
            <Link href="/" className="logo-dark">
              <Image
                width={logoWidth}
                height="auto"
                src={NewLogo}
                alt="Site Logo"
              />
            </Link>
            <Link href="/" className="logo-light">
              <Image
                priority
                width={logoWidth}
                height="auto"
                src={NewLogo}
                alt="Site Logo"
              />
            </Link>
          </div>
          <div className="header__nav-icon-5">
            <button onClick={openCanvas} id="open_offcanvas">
              <span className="menu-text-pp">Menu</span>
              <Image
                priority
                width={21}
                height={15}
                src={MenuBlack}
                alt="Menubar Icon"
              />
            </button>
          </div>
        </div>
      </header>
      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
}
