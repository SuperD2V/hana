"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "../../const/routeKey";
import {
  navigationContainer,
  navigationHidden,
  navWrapper,
  desktopMenu,
  navLink,
  mobileMenuButton,
  socialLinks,
  mobileMenu,
  mobileMenuOpen,
  mobileNavLinks,
  mobileNavLink
} from "./index.css";
import { Hamberger } from "../hamberger";
import { Title1 } from "../Typography";
import { usePathname } from "next/navigation";

// import AOS from "aos";
// import "aos/dist/aos.css";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();

  const width = useWindowWidth();
  const isMobile = isClient && width && width < 1280; // 예: 2xl 기준

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 모바일에서는 스크롤 이벤트 무시
      if (isMobile) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 스크롤 다운 시 네비게이션 숨김 (데스크탑만)
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // 스크롤 업 시 네비게이션 표시 (데스크탑만)
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (pathName === "/introduce") return null; // 스타일용으로 introduce 전용 네비게이션은 따로 있음

  return (
    <nav
      className={`${navigationContainer} ${!isVisible ? navigationHidden : ""}`}
    >
      <div className={navWrapper}>
        <div className='logo'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              alt='logo'
              width={isMobile ? 61 : 130}
              height={isMobile ? 28 : 60}
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
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // 서버 사이드 렌더링 시에는 실행하지 않음
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
