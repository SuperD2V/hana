"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "../../const/routeKey";
import {
  navigationContainer,
  navWrapper,
  desktopMenu,
  navLink,
  mobileMenuButton,
  socialLinks
} from "./index.css";
import { Hamberger } from "../hamberger";
import { Title1 } from "../Typography";
// import AOS from "aos";
// import "aos/dist/aos.css";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={navigationContainer}>
      <div className={navWrapper}>
        <div className='logo'>
          <Link href='/'>
            <Image
              src='/images/logo-typo.png'
              alt='logo'
              width={120}
              height={120}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "80px",
                maxHeight: "32px"
              }}
            />
          </Link>
        </div>

        <div className={`${desktopMenu} hidden md:flex`}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={navLink}>
              <Title1>{item.label}</Title1>
            </Link>
          ))}
        </div>

        <div className={`${socialLinks} hidden md:flex`}>
          <Image
            src='/images/instagram.png'
            alt='instagram'
            width={36}
            height={36}
          />
          <Image
            src='/images/facebook.png'
            alt='facebook'
            width={36}
            height={36}
          />
        </div>

        <div className={mobileMenuButton} onClick={toggleMobileMenu}>
          <Hamberger
            isOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
}
