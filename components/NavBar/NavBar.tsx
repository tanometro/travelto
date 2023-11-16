"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import CartCounter from "@/components/Cart/CartCounter/CartCounter";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  if (pathname === "/AdminDashboard") return;
  useEffect(() => {
    //   axios
    //     .get(`${baseURL}/attractions`)
    //     .then((response) => response.data)
    //     .then((data) => {
    //       if (!data.length) {
    //         axios
    //           .get(`${baseURL}/attractions/data`)
    //           .then((response) => console.log(response));
    //       }
    //     });
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navContainer = document.getElementById("header"),
      navToggle = document.getElementById("nav-toggle"),
      carrito = document.getElementById("carrito"),
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
      // When we click on each nav__link, we remove the show-menu class
      navMenu?.classList.remove(styles.show_menu);
      navContainer?.classList.remove(styles.expanded);
      if (navToggle && window.innerWidth < 1023)
        navToggle.style.display = "flex";
    };
    carrito?.addEventListener("click", linkAction);
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
  const { data: session, status } = useSession();
  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} ${styles.container}`}>
        <a href="/#" className={styles.nav__logo}>
          TravelTo
        </a>
        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a
                href="/#home"
                className={`${styles.nav__link} ${styles.active_link}`}
              >
                Home
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="/#popular" className={styles.nav__link}>
                Popular
              </a>
            </li>
            <li className={styles.nav__item}>
              {/* <a href="/#explore" className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"> */}

              <Link href="/#explore" className={styles.nav__link}>
                Explorar
              </Link>
            </li>
            <li className={styles.nav__item}>
              <a href="/#footer" className={styles.nav__link}>
                About
              </a>
            </li>
            <li className="relative mx-auto">
              <Link href="/cart" id="carrito">
                <CartCounter />
              </Link>
            </li>
            <li className={styles.nav__item}>
                {!session ? (
                  <Link href="/login" className={styles.nav__link}>
                    Login
                  </Link>
                ) : (
                  <ProfileInfo />
                )}
              </li>
              <li className={styles.nav__item}>
              <Link href="/AdminDashboard" className={styles.nav__link}>
                Admin
              </Link>
            </li>
          </ul>
          {/*Close button*/}
          <div className={styles.nav__close} id="nav-close">
            <i className="ri-close-line" />
          </div>
        </div>
        {/*Toggle button*/}
        <div className={styles.nav__toggle + " z-[103]"} id="nav-toggle">
          <i className="ri-menu-fill" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
