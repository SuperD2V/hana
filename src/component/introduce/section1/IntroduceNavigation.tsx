"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const width = useWindowWidth();
  const isMobile = width < 1280; // 예: 2xl 기준

  useEffect(() => {
    setMounted(true);
    // 초기 스크롤 위치 설정
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      console.log("🔍 스크롤 디버깅:", {
        현재위치: currentScrollY,
        이전위치: lastScrollY.current,
        차이: currentScrollY - lastScrollY.current,
        현재표시상태: isVisible
      });

      // 최상단이면 항상 보이기
      if (currentScrollY === 0) {
        console.log("✅ 최상단 - 네비게이션 표시");
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 스크롤 변화가 5px 이상일 때만 반응 (미세한 스크롤 무시)
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
        console.log("⏸️ 스크롤 변화 너무 작음 - 무시");
        return;
      }

      // 아래로 스크롤하면 숨기기, 위로 스크롤하면 보이기
      if (currentScrollY > lastScrollY.current) {
        console.log("⬇️ 아래로 스크롤 - 네비게이션 숨김");
        setIsVisible(false);
      } else {
        console.log("⬆️ 위로 스크롤 - 네비게이션 표시");
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

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
    <nav
      className={navigationContainer}
      style={{
        transform: isVisible
          ? isMobile
            ? "translateY(0)"
            : "translate(-50%, 0)"
          : isMobile
          ? "translateY(-100%)"
          : "translate(-50%, -100%)",
        transition: "transform 0.3s ease-in-out"
      }}
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
