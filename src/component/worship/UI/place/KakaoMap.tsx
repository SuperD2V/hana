"use client";
import React from "react";
import Image from "next/image";

export const KakaoMap = () => {
  return (
    <div
      style={{
        font: "normal normal 400 12px/normal dotum, sans-serif",
        width: "100%",
        height: "auto",
        color: "#333",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <div
        className='kakao-map-img-wrapper'
        style={{
          height: "480px",
          width: "100%"
        }}
      >
        <a
          href='https://map.kakao.com/?urlX=510148.00000000215&urlY=1057135.0000000023&itemId=1084884183&q=%ED%95%98%EB%82%98%EB%B9%84%EC%A0%84%EA%B5%90%ED%9A%8C&srcid=1084884183&map_type=TYPE_MAP&from=roughmap'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            display: "block",
            width: "100%",
            height: "auto"
          }}
        >
          <Image
            className='map'
            src='http://t1.daumcdn.net/roughmap/imgmap/9036550973fbe1d54aedf02e55b426213cd17e411a5bf5de7423e6a903e99de7'
            width={1078}
            height={478}
            style={{
              border: "1px solid #ccc",
              width: "100%",
              height: "478px",
              maxWidth: "100%"
            }}
            alt='하나비전교회 지도'
            unoptimized
          />
        </a>
      </div>
      {/* 하단 바 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          overflow: "hidden",
          padding: "7px 11px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "0px 0px 2px 2px",
          backgroundColor: "#f9f9f9",
          gap: "8px",
          fontSize: 13
        }}
      >
        <a
          href='https://map.kakao.com/?from=roughmap&eName=%ED%95%98%EB%82%98%EB%B9%84%EC%A0%84%EA%B5%90%ED%9A%8C&eX=510148.00000000215&eY=1057135.0000000023'
          style={{
            height: 15,
            paddingTop: 1,
            lineHeight: "15px",
            color: "#000",
            textDecoration: "none",
            marginRight: 9
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          길찾기
        </a>
        <span
          style={{
            width: 1,
            height: 11,
            borderLeft: "1px solid #d0d0d0",
            margin: "0 8px",
            display: "inline-block",
            verticalAlign: "middle"
          }}
        />
        <a
          target='_blank'
          href='https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=1084884183&itemId=1084884183&q=%ED%95%98%EB%82%98%EB%B9%84%EC%A0%84%EA%B5%90%ED%9A%8C&urlX=510148.00000000215&urlY=1057135.0000000023'
          style={{
            height: 15,
            paddingTop: 1,
            lineHeight: "15px",
            color: "#000",
            textDecoration: "none"
          }}
          rel='noopener noreferrer'
        >
          지도 크게 보기
        </a>
      </div>
      {/* 반응형 지도 높이 조정 */}
      <style>{`
        @media (max-width: 600px) {
          .kakao-map-img-wrapper {
            height: 220px !important;
          }
          .kakao-map-img-wrapper .map {
            height: 220px !important;
          }
        }
        
        @media (max-width: 480px) {
          .kakao-map-img-wrapper {
            height: 200px !important;
          }
          .kakao-map-img-wrapper .map {
            height: 200px !important;
          }
        }
        
        @media (max-width: 360px) {
          .kakao-map-img-wrapper {
            height: 180px !important;
          }
          .kakao-map-img-wrapper .map {
            height: 180px !important;
          }
        }
        
        @media (max-width: 320px) {
          .kakao-map-img-wrapper {
            height: 160px !important;
          }
          .kakao-map-img-wrapper .map {
            height: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};
