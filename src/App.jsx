import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

// Image imports
import mainImg from "./assets/images/desktop-image-hero-1.jpg";
import mainImgMobile from "./assets/images/mobile-image-hero-1.jpg";
import mainImg2 from "./assets/images/desktop-image-hero-2.jpg";
import mainImg2Mobile from "./assets/images/mobile-image-hero-2.jpg";
import mainImg3 from "./assets/images/desktop-image-hero-3.jpg";
import mainImg3Mobile from "./assets/images/mobile-image-hero-3.jpg";
import leftImg from "./assets/images/image-about-dark.jpg";
import rightImg from "./assets/images/image-about-light.jpg";
import arrowButtonIcon from "./assets/icons/icon-arrow.svg";
import arrowLeftIcon from "./assets/icons/icon-angle-left.svg";
import arrowRightIcon from "./assets/icons/icon-angle-right.svg";
import hamburgerIcon from "./assets/icons/icon-hamburger.svg";
import closeIcon from "./assets/icons/icon-close.svg";

const dataNavbar = ["home", "shop", "about", "contact"];

function App() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [mainImage, setMainImage] = useState(0);
  const [navMobile, setNavMobile] = useState(false);
  console.log(navMobile);

  // Determine which image set to use based on screen width
  const imageArray = useMemo(() => {
    if (widthScreen <= 768) {
      return [mainImgMobile, mainImg2Mobile, mainImg3Mobile];
    }
    return [mainImg, mainImg2, mainImg3];
  }, [widthScreen]);

  const topWidth = useRef(null);
  const leftImageBottom = useRef(null);
  const middleTextContainer = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  // Function to update the width of the screen
  const updateWidth = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    // Add the resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    console.log(widthScreen);
  }, [widthScreen]);

  const plusImage = () => {
    setMainImage((prev) => (prev >= 2 ? 0 : prev + 1));
  };

  const minusImage = () => {
    setMainImage((prev) => (prev <= 0 ? 2 : prev - 1));
  };

  useEffect(() => {
    const updateWidth = () => {
      if (
        middleTextContainer.current &&
        leftImageBottom.current &&
        topWidth.current
      ) {
        setTotalWidth(
          middleTextContainer.current.clientWidth +
            leftImageBottom.current.clientWidth -
            topWidth.current.clientWidth
        );
      }
    };

    // Update width on initial mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup listener
    return () => window.removeEventListener("resize", updateWidth);
  }, [middleTextContainer, leftImageBottom, topWidth]);

  const imageStyles = {
    position: widthScreen <= 768 ? "relative" : "absolute",
    width: "100%",
    height: widthScreen <= 768 ? "auto" : "100%",
    objectFit: widthScreen <= 768 ? "contain" : "cover",
    zIndex: 1,
  };

  return (
    <>
      <header className="header">
        <section className={`pop-up-nav ${navMobile ? "active" : ""}`}>
          <img
            className="close-icon"
            src={closeIcon}
            onClick={() => setNavMobile(!navMobile)}
            alt=""
          />
          <ul className="navbar__list--mobile">
            {dataNavbar.map((item, index) => (
              <li key={index} className="navbar__item">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <img
          className="hamburger"
          src={hamburgerIcon}
          alt=""
          onClick={() => setNavMobile(!navMobile)}
        />
        <h1 className="header__title header__title--highlight">room</h1>

        <ul className="navbar__list">
          {dataNavbar.map((item, index) => (
            <li key={index} className="navbar__item">
              {item}
            </li>
          ))}
        </ul>
      </header>

      <main className="main-content">
        <section className="main-content__top">
          <article ref={topWidth} className="left">
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                height: widthScreen <= 768 ? "auto" : "100%",
                overflow: "hidden",
              }}
            >
              <AnimatePresence>
                <motion.img
                  key={imageArray[mainImage]}
                  className="article__image"
                  src={imageArray[mainImage]}
                  alt="Placeholder"
                  style={imageStyles}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </AnimatePresence>
            </motion.div>
          </article>
          <article className="right">
            <div className="main-content__article main-content__article--text">
              <h2 className="article__title">
                Discover innovative ways to decorate
              </h2>
              <p className="article__description">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <button className="article__button article__button--highlight">
                <span>Shop Now</span>
                <img className="image-arrow" src={arrowButtonIcon} alt="" />
              </button>
            </div>
            <div
              style={{
                width: totalWidth + "px",
                height: totalWidth / 2 + "px",
              }}
              className="main-content__article-buttons"
            >
              <button onClick={minusImage} className="article__button--nav">
                <img src={arrowLeftIcon} alt="" />
              </button>
              <button onClick={plusImage} className="article__button--nav">
                <img src={arrowRightIcon} alt="" />
              </button>
            </div>
          </article>
        </section>

        <section className="footer">
          <article className="footer_item footer-image">
            <img
              ref={leftImageBottom}
              className="article__image"
              src={leftImg}
              alt=""
            />
          </article>
          <article ref={middleTextContainer} className="footer_item middle">
            <h3 className="article__subtitle">ABOUT OUR FURNITURE</h3>
            <p className="article__description">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </article>
          <article className="footer_item footer-image">
            <img className="article__image" src={rightImg} alt="" />
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
