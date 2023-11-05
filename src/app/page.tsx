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
import Popular from "../../components/popular/Populares";
import CartCounter from "@/components/Cart/CartCounter/CartCounter";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
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
