"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  const width = useWindowWidth();
  const isMobile = width < 1280; // 예: 2xl 기준

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

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

        <div className={`${desktopMenu} hidden 2xl:flex`}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={navLink}>
              <Title1>{item.label}</Title1>
            </Link>
          ))}
        </div>

        <div className={`${socialLinks} hidden 2xl:flex`}>
          <Link
            href='https://www.instagram.com/hanavisionch?utm_source=ig_web_button_share_sheet&igsh=azA4ZjU2ZzBmZGtw'
            target='_blank'
          >
            <Image
              src='/images/instagram.png'
              alt='instagram'
              width={36}
              height={36}
            />
          </Link>
          <Link href='https://www.facebook.com/hanavisionch' target='_blank'>
            <Image
              src='/images/facebook.png'
              alt='facebook'
              width={36}
              height={36}
            />
          </Link>
        </div>

        <div
          className={`${mobileMenuButton} 2xl:hidden`}
          onClick={toggleMobileMenu}
        >
          <Hamberger
            isOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </div>
      {/* 모바일 메뉴 */}
      <div
        className={
          isMobileMenuOpen ? `${mobileMenu} ${mobileMenuOpen}` : mobileMenu
        }
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
      >
        <div className={mobileNavLinks}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={mobileNavLink}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 273,
              justifyContent: "flex-end"
            }}
          >
            <Link
              href='https://www.instagram.com/hanavisionch?utm_source=ig_web_button_share_sheet&igsh=azA4ZjU2ZzBmZGtw'
              target='_blank'
            >
              <Image
                src='/images/instagram.png'
                alt='instagram'
                width={28}
                height={28}
              />
            </Link>
            <Link href='https://www.facebook.com/hanavisionch'>
              <Image
                src='/images/facebook.png'
                alt='facebook'
                width={28}
                height={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
