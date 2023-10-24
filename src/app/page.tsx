/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import styles from './page.module.css';

// Impotrtando imagenes
import london from '../../public/images/london.jpeg'
import img_home from '../../public/images/home-bg.jpg'
import trees from '../../public/images/home-trees.jpg'
import lake from '../../public/images/home-lake.jpg'
import mountain from '../../public/images/home-mountain.jpg'
import beach from '../../public/images/home-beach.jpg'
import popular_mountain from '../../public/images/popular-mountain.jpg'
import popular_lake from '../../public/images/popular-lake.jpg'
import popular_forest from '../../public/images/popular-forest.jpg'
import about_beach from '../../public/images/about-beach.jpg'
import explore_beach from '../../public/images/explore-beach.jpg'
import explore_perfil from '../../public/images/explore-perfil.png'
import join_island from '../../public/images/join-island.jpg'

export default function Home() {
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
                    <a href="#home" className={`${styles.nav__link} ${styles.active_link}`}>
                    Home
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#about" className={styles.nav__link}>
                    About
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#popular" className={styles.nav__link}>
                    Popular
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#explore" className={styles.nav__link}>
                    Explore
                    </a>
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
            <Image
                src= {img_home}
                
                alt="home image"
                className={styles.home__bg}
            />
            <div className={styles.home__shadow} />
            <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
                <div className={styles.home__data}>
                <h3 className={styles.home__subtitle}>Welcome To TravelTo</h3>
                <h1 className={styles.home__title}>
                    Explore <br />
                    The World
                </h1>
                <p className={styles.home__description}>
                    Live the trips exploring the world, discover paradises, islands,
                    mountains and much more, get your trip now.
                </p>
                <a href="#" className={styles.button}>
                    Start Your Journey <i className="ri-arrow-right-line" />
                </a>
                </div>
                <div className={`${styles.home__cards} ${styles.grid}`}>
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
                </div>
            </div>
            </section>
            {/*==================== ABOUT ====================*/}
            <section className={`${styles.about} ${styles.section}`} id="about">
            <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
                <div className={styles.about__data}>
                <h2 className={styles.section__title}>
                    Learn More <br />
                    About Travel
                </h2>
                <p className={styles.about__description}>
                    All the trips around the world are a great pleasure and happiness
                    for anyone, enjoy the sights when you travel the world. Travel
                    safely and without worries, get your trip and explore the paradises
                    of the world.
                </p>
                <a href="#" className={styles.button}>
                    Explore Travel <i className="ri-arrow-right-line" />
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
            </section>
            {/*==================== POPULAR ====================*/}
            <section className={`${styles.popular} ${styles.section}`} id="popular">
            <h2 className={styles.section__title}>
                Enjoy The Beauty <br />
                Of The World
            </h2>
            <div className={`${styles.popular__container} ${styles.container} ${styles.grid}`}>
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
            </section>
            {/*==================== EXPLORE ====================*/}
            <section className={`${styles.explore} ${styles.section}`} id="explore">
            <div className={styles.explore__container}>
                <div className={styles.explore__image}>
                <Image
                    src={explore_beach}
                    alt="explore image"
                    className={styles.explore__img}
                />
                <div className={styles.explore__shadow} />
                </div>
                <div className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}>
                <div className={styles.explore__data}>
                    <h2 className={styles.section__title}>
                    Explore The <br />
                    Best Paradises
                    </h2>
                    <p className={styles.explore__description}>
                    Exploring paradises such as islands and valleys when traveling the
                    world is one of the greatest experiences when you travel, it
                    offers you harmony and peace and you can enjoy it with great
                    comfort.
                    </p>
                </div>
                <div className={styles.explore__user}>
                    <Image
                    src={explore_perfil}
                    alt="explore perfil"
                    className={styles.explore__perfil}
                    />
                    <span className={styles.explore__name}>Paul Jeams</span>
                </div>
                </div>
            </div>
            </section>
            {/*==================== JOIN ====================*/}
            <section className={`${styles.join} ${styles.section}`}>
            <div className={`${styles.join__container} ${styles.container} ${styles.grid}`}>
                <div className={styles.join__data}>
                <h2 className={styles.section__title}>
                    Your Journey <br />
                    Starts Here
                </h2>
                <p className={styles.join__description}>
                    Get up to date with the latest travel and information from us.
                </p>
                <form action="" className={styles.join__form}>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.join__input}
                    />
                    <button className={styles.join__button}>
                    Subscribe Our Newsletter <i className="ri-arrow-right-line" />
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
        <footer className={styles.footer}>
            <div className={`${styles.footer__container} ${styles.container} ${styles.grid}`}>
            <div className={`${styles.footer__content} ${styles.grid}`}>
                <div>
                <a href="#" className={styles.footer__logo}>
                    Travel
                </a>
                <p className={styles.footer__description}>
                    Travel with us and explore <br />
                    the world without limits.
                </p>
                </div>
                <div className={`${styles.footer__data} ${styles.grid}`}>
                <div>
                    <h3 className={styles.footer__title}>About</h3>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        About Us
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Features
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        News &amp; Blog
                    </a>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.footer__title}>Company</h3>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        FAQs
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        History
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Testimonials
                    </a>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.footer__title}>Contact</h3>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Call Center
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Support Center
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Contact Us
                    </a>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.footer__title}>Support</h3>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Privacy Policy
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Terms &amp; Services
                    </a>
                    </ul>
                    <ul className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Payments
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
                © Copyright GenioTotal. All rights reserved
                </span>
            </div>
            </div>
        </footer>
        {/*========== SCROLL UP ==========*/}
        <a href="#" className={styles.scrollup} id="scroll-up">
            <i className="ri-arrow-up-line" />
        </a>
    </>

  )
}
