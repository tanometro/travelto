import React from "react";
import Image from "next/image";
import popular_mountain from "../../public/images/popular-mountain.jpg";
import popular_lake from "../../public/images/popular-lake.jpg";
import popular_forest from "../../public/images/popular-forest.jpg";
import styles from "./Popular.module.css";

export default function Popular() {
  return (
    <div>
      <h2 className={styles.section__title}>
        Disfrute de las atracciones más populares
      </h2>
      <div
        className={`${styles.popular__container} ${styles.container} ${styles.grid}`}
      >
        <article className={styles.popular__card}>
          <div className={styles.popular__image}>
            <Image
              src={popular_mountain}
              alt="popular image"
              className={styles.popular__img}
            />
            <div className={styles.popular__shadow} />
          </div>
          <h2 className={styles.popular__title}>Logan Mountain</h2>
          <div className={styles.popular__location}>
            <i className="ri-map-pin-line" />
            <span>Canadá</span>
          </div>
        </article>
        <article className={styles.popular__card}>
          <div className={styles.popular__image}>
            <Image
              src={popular_forest}
              alt="popilar image"
              className={styles.popular__img}
            />
            <div className={styles.popular__shadow} />
          </div>
          <h2 className={styles.popular__title}>Spike Forest</h2>
          <div className={styles.popular__location}>
            <i className="ri-map-pin-line" />
            <span>Irland</span>
          </div>
        </article>
        <article className={styles.popular__card}>
          <div className={styles.popular__image}>
            <Image
              src={popular_lake}
              alt="popilar image"
              className={styles.popular__img}
            />
            <div className={styles.popular__shadow} />
          </div>
          <h2 className={styles.popular__title}>Garda Lake</h2>
          <div className={styles.popular__location}>
            <i className="ri-map-pin-line" />
            <span>Italy</span>
          </div>
        </article>
      </div>
    </div>
  );
}
