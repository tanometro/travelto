"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import styles from "./page.module.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { baseURL } from "@/constant";
import { useEffect } from "react";
//Importando componentes
import Explore from "@/components/Explore/Explore";
// Impotrtando imagenes
import Logo from "@/public/images/logo.png";
import london from "../../public/images/london.jpeg";
import img_home from "../../public/images/home-bg.jpg";
import trees from "../../public/images/home-trees.jpg";
import lake from "../../public/images/home-lake.jpg";
import mountain from "../../public/images/home-mountain.jpg";
import beach from "../../public/images/home-beach.jpg";
import popular_mountain from "../../public/images/popular-mountain.jpg";
import popular_lake from "../../public/images/popular-lake.jpg";
import popular_forest from "../../public/images/popular-forest.jpg";
import about_beach from "../../public/images/about-beach.jpg";

import join_island from "../../public/images/join-island.jpg";
import axios from "axios";
import Popular from "@/components/Popular/Popular";

export default function Home() {
  useEffect(() => {
    axios
      .get(`${baseURL}/attractions`)
      .then((response) => response.data)
      .then((data) => {
        if (!data.length) {
          axios
            .get(`${baseURL}/attractions/data`)
            .then((response) => console.log(response));
        }
      });
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navContainer = document.getElementById("header"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu?.classList.add(styles.show_menu);
        navContainer?.classList.add(styles.expanded);
        if (navToggle && window.innerWidth < 1023)
          navToggle.style.display = "none";
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu?.classList.remove(styles.show_menu);
        navContainer?.classList.remove(styles.expanded);
        if (navToggle && window.innerWidth < 1023)
          navToggle.style.display = "flex";
      });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll(`.${styles.nav__link}`);
    const linkAction = () => {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu?.classList.remove(styles.show_menu);
      navContainer?.classList.remove(styles.expanded);
      if (navToggle && window.innerWidth < 1023)
        navToggle.style.display = "flex";
    };
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*=============== SHOW SCROLL UP ===============*/
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (!scrollUp) return;
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
      window.scrollY >= 350
        ? scrollUp.classList.add(styles.show_scroll)
        : scrollUp.classList.remove(styles.show_scroll);
    };
    window.addEventListener("scroll", scrollUp);
    window.addEventListener("resize", () => {
      window.innerWidth > 1023
        ? navToggle && (navToggle.style.display = "none")
        : navToggle && (navToggle.style.display = "flex");
    });

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current: HTMLElement) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionsClass = document.querySelector(
            "#nav-menu a[href='#" + sectionId + "']"
          );
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add(styles.active_link);
        } else {
          sectionsClass?.classList.remove(styles.active_link);
        }
      });
    };
    window.addEventListener("scroll", scrollActive);
  }, []);
  return (
    <>
      <header className={styles.header} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <a href="#" className={styles.nav__logo}>
            TravelTo
          </a>
          <div className={styles.nav__menu} id="nav-menu">
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a
                  href="#home"
                  className={`${styles.nav__link} ${styles.active_link}`}
                >
                  Home
                </a>
              </li>

              <li className={styles.nav__item}>
                <a href="#popular" className={styles.nav__link}>
                  Popular
                </a>
              </li>
              <li className={styles.nav__item}>
                {/* <a href="#explore" className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"> */}

                <Link href="#explore" className={styles.nav__link}>
                  Explorar
                </Link>
              </li>
              <li className={styles.nav__item}>
                <a href="#footer" className={styles.nav__link}>
                  About
                </a>
              </li>
              <li className={styles.nav__item}>
                <Link href="/login" className={styles.nav__link}>
                  Login
                </Link>
              </li>
            </ul>
            {/*Close button*/}
            <div className={styles.nav__close} id="nav-close">
              <i className="ri-close-line" />
            </div>
          </div>
          {/*Toggle button*/}
          <div className={styles.nav__toggle} id="nav-toggle">
            <i className="ri-menu-fill" />
          </div>
        </nav>
      </header>
      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className={`${styles.home} ${styles.section}`} id="home">
          <Image src={img_home} alt="home image" className={styles.home__bg} />
          <div className={styles.home__shadow} />
          <div
            className={`${styles.home__container} ${styles.container} ${styles.grid}`}
          >
            <div className={styles.home__data}>
              <h3 className={styles.home__subtitle}>Bienvenido a TravelTo</h3>
              <h1 className={styles.home__title}>Explore el mundo</h1>
              <p className={styles.home__description}>
                Vive los viajes explorando el mundo, descubre y disfrute de las
                mejores atracciones y mucho más, consiga su viaje ahora.
              </p>
              <a href="#explore" className={styles.button}>
                Comience su viaje <i className="ri-arrow-right-line" />
              </a>
            </div>
            {/* <div className={`${styles.home__cards} ${styles.grid}`}>
                <article className={styles.home__card}>
                    <Image
                    src={london}
                    alt="home image"
                    className={styles.home__card_img}
                    />
                    <h3 className={styles.home__card_title}>London</h3>
                    <div className={styles.home__card_shadow} />
                </article>
                <article className={styles.home__card}>
    
                    <img
                    src={'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    alt="home image"
                    
                    className={styles.home__card_img}
                    />
                    <h3 className={styles.home__card_title}>Berlin</h3>
                    <div className={styles.home__card_shadow} />
                </article>
                <article className={styles.home__card}>
                    <Image
                    src={mountain}
                    alt="home image"
                    
                    className={styles.home__card_img}
                    />
                    <h3 className={styles.home__card_title}>Italy</h3>
                    <div className={styles.home__card_shadow} />
                </article>
                <article className={styles.home__card}>
                    <Image
                    src={beach}
                    alt="home image"
                    className={styles.home__card_img}
                    />
                    <h3 className={styles.home__card_title}>Spain</h3>
                    <div className={styles.home__card_shadow} />
                </article>
                </div>*/}
          </div>
        </section>
        {/*==================== ABOUT ====================*/}
        {/* <section className={`${styles.about} ${styles.section}`} id="about">
            <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
                <div className={styles.about__data}>
                <h2 className={styles.section__title}>
                    Aprenda más <br />
                    Sobre TravelTo
                </h2>
                <p className={styles.about__description}>
                Todos los viajes alrededor del mundo son un gran placer y felicidad para cualquiera,
                 disfrute a pleno viajando por el mundo. 
                 Viaja seguro y sin preocupaciones, consigue tu viaje y explora las mejores atracciones.
                </p>
                <a href="#" className={styles.button}>
                    Explorar TravelTo <i className="ri-arrow-right-line" />
                </a>
                </div>
                <div className={styles.about__image}>
                <Image
                    src={about_beach}
                    alt="about beach"
                    className={styles.about__img}
                />
                <div className={styles.home__shadow} />
                </div>
            </div>
            </section>*/}
        {/*==================== POPULAR ====================*/}
        <section className={`${styles.popular} ${styles.section}`} id="popular">
          <Popular />
        </section>
        {/*==================== EXPLORE ====================*/}
        <section className={`${styles.explore} ${styles.section}`} id="explore">
          <Explore />
        </section>
        {/*==================== JOIN ====================*/}
        <section className={`${styles.join} ${styles.section}`}>
          <div
            className={`${styles.join__container} ${styles.container} ${styles.grid}`}
          >
            <div className={styles.join__data}>
              <h2 className={styles.section__title}>
                Su viaje <br />
                Comienza aquí
              </h2>
              <p className={styles.join__description}>
                Manténgase al día con nuestra última información y atracciones .
              </p>
              <form action="" className={styles.join__form}>
                <input
                  type="email"
                  placeholder="Ingrese su email"
                  className={styles.join__input}
                />
                <button className={styles.join__button}>
                  Suscríbete <i className="ri-arrow-right-line" />
                </button>
              </form>
            </div>
            <div className={styles.join__image}>
              <Image
                src={join_island}
                alt="join image"
                className={styles.join__img}
              />
              <div className={styles.join__shadow} />
            </div>
          </div>
        </section>
      </main>
      {/*==================== FOOTER ====================*/}
      <section className={styles.footer} id="footer">
        <div
          className={`${styles.footer__container} ${styles.container} ${styles.grid}`}
        >
          <div className={`${styles.footer__content} ${styles.grid}`}>
            <div>
              <a href="#" className={styles.footer__logo}>
                TravelTo
              </a>
              <p className={styles.footer__description}>
                Viaja con nosotros y explora <br />
                el mundo sin límites.
              </p>
            </div>
            <div className={`${styles.footer__data} ${styles.grid}`}>
              <div>
                <h3 className={styles.footer__title}>Acerca de</h3>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Sobre nosotros
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Características
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    News &amp; Blog
                  </a>
                </ul>
              </div>
              <div>
                <h3 className={styles.footer__title}>Compania</h3>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    FAQs
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Historial
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Testimoniales
                  </a>
                </ul>
              </div>
              <div>
                <h3 className={styles.footer__title}>Contáctos</h3>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Call Center
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Centro de soporte
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Contactenos
                  </a>
                </ul>
              </div>
              <div>
                <h3 className={styles.footer__title}>Soporte</h3>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Politica de privacidad
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Terminos &amp; Servicios
                  </a>
                </ul>
                <ul className={styles.footer__links}>
                  <a href="#" className={styles.footer__link}>
                    Medios de pago
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer__group}>
            <div className={styles.footer__social}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className={styles.footer__social_link}
              >
                <i className="ri-facebook-line" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className={styles.footer__social_link}
              >
                <i className="ri-instagram-line" />
              </a>
              <a
                href="ttps://twitter.com/"
                target="_blank"
                className={styles.footer__social_link}
              >
                <i className="ri-twitter-line" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className={styles.footer__social_link}
              >
                <i className="ri-youtube-line" />
              </a>
            </div>
            <span className={styles.footer__copy}>
              © Copyright GenioTotal. Todos los derechos reservados
            </span>
          </div>
        </div>
        <a href="#" className={styles.scrollup} id="scroll-up">
          <i className="ri-arrow-up-line" />
        </a>
      </section>
    </>
  );
}
