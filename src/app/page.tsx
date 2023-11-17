"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import styles from "./page.module.css";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
//Importando componentes
import Explore from "@/components/Explore/Explore";
// Impotrtando imagenes
import img_home from "../../public/images/home-bg.jpg";
import join_island from "../../public/images/join-island.jpg";
import Popular from "../../components/popular/Populares";

export default function Home() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elemento = event.target as HTMLElement;
    if (
      elemento &&
      !(
        elemento.id.includes("Attraction") ||
        elemento.parentElement?.id.includes("Attraction")
      )
    ) {
      const menues = document.querySelectorAll(".quantity_selector");
      menues.forEach((menu) => {
        if (!menu.classList.contains("hidden")) {
          menu.classList.remove("flex");
          menu.classList.add("hidden");
        }
      });
    }
  };

  return (
    <>
      {/*==================== MAIN ====================*/}
      <main className="main" onClick={handleClick}>
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
    </>
  );
}
