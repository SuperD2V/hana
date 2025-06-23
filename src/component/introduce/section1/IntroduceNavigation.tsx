"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/component/shared/const/routeKey";
import {
  navigationContainer,
  navWrapper,
  logo,
  desktopMenu,
  navLink,
  mobileMenuButton,
  mobileMenu,
  mobileMenuOpen,
  mobileNavLinks,
  mobileNavLink,
  socialLinks
} from "./index.css";
import { Hamberger } from "@/component/shared/ui/hamberger";
import { Title1 } from "@/component/shared/ui/Typography";

export function IntroduceNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={navigationContainer}>
      <div className={navWrapper}>
        <div>
          <Link href='/'>
            <Image
              src='/images/logo-typo.png'
              alt='logo'
              width={120}
              height={120}
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
