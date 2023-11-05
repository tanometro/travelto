"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import CartCounter from "@/components/Cart/CartCounter/CartCounter";
import { useSession } from "next-auth/react";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";

function NavBar() {
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
            {status !== "loading" && (
              <li className={styles.nav__item}>
                {!session ? (
                  <Link href="/login" className={styles.nav__link}>
                    Login
                  </Link>
                ) : (
                  <ProfileInfo />
                )}
              </li>
            )}
            <li className={styles.nav__item}>
              <Link href="/AdminDashboard" className={styles.nav__link}>
                Admin
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <CartCounter />
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
  );
}

export default NavBar;
