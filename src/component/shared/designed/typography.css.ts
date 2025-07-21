import { style } from "@vanilla-extract/css";

// Pretendard Variable 폰트 설정 (한글)
export const fontFamily = {
  pretendard:
    "Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  poppins:
    "var(--font-poppins), -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', sans-serif"
};

// 폰트 웨이트
export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800"
};

// 한글 타이포그래피 토큰 정의 (Pretendard)
export const typography = {
  largetitle_01: {
    bold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "36px",
      lineHeight: "70px",
      letterSpacing: "0.41px",
      fontWeight: fontWeight.bold
    })
  },
  largetitle_02: {
    bold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0.37px",
      fontWeight: fontWeight.bold
    }),

    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0.37px",
      fontWeight: fontWeight.semibold
    }),
    extrabold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0.37px",
      fontWeight: fontWeight.extrabold
    })
  },
  title_01: {
    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "0.36px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "0.36px",
      fontWeight: fontWeight.medium
    }),
    bold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "0.36px",
      fontWeight: fontWeight.bold
    })
  },
  title_02: {
    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.35px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.35px",
      fontWeight: fontWeight.medium
    }),
    bold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.35px",
      fontWeight: fontWeight.bold
    })
  },
  title_03: {
    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "20px",
      lineHeight: "26px",
      letterSpacing: "0.38px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "20px",
      lineHeight: "26px",
      letterSpacing: "0.38px",
      fontWeight: fontWeight.medium
    }),
    bold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "20px",
      lineHeight: "26px",
      letterSpacing: "0.38px",
      fontWeight: fontWeight.bold
    })
  },
  headline_01: {
    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-0.41px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-0.41px",
      fontWeight: fontWeight.medium
    }),
    regular: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-0.41px",
      fontWeight: fontWeight.regular
    })
  },
  body_01: {
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "-0.28px",
      fontWeight: fontWeight.medium
    }),
    regular: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "-0.28px",
      fontWeight: fontWeight.regular
    }),
    semibold: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "-0.28px",
      fontWeight: fontWeight.semibold
    })
  },
  body_02: {
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.5px",
      fontWeight: fontWeight.medium
    }),
    regular: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.5px",
      fontWeight: fontWeight.regular
    })
  },
  caption_01: {
    medium: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
      fontWeight: fontWeight.medium
    }),
    regular: style({
      fontFamily: fontFamily.pretendard,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
      fontWeight: fontWeight.regular
    })
  }
};

// 영어 타이포그래피 토큰 정의 (Poppins)
export const typographyEn = {
  largetitle_01: {
    bold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "80px",
      lineHeight: "80px",
      fontWeight: fontWeight.bold
    })
  },
  largetitle_02: {
    extrabold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "60px",
      lineHeight: "72px",
      fontWeight: fontWeight.extrabold
    })
  },
  largetitle_03: {
    extrabold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: fontWeight.extrabold
    }),
    bold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: fontWeight.bold
    }),
    medium: style({
      fontFamily: fontFamily.poppins,
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: fontWeight.medium
    })
  },
  title_01: {
    semibold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.poppins,
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: fontWeight.medium
    })
  },
  title_02: {
    semibold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.poppins,
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: fontWeight.medium
    }),
    bold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: fontWeight.bold
    })
  },
  title_03: {
    semibold: style({
      fontFamily: fontFamily.poppins,
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: fontWeight.semibold
    }),
    medium: style({
      fontFamily: fontFamily.poppins,
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: fontWeight.medium
    })
  },
  headline_01: {
    medium: style({
      fontFamily: fontFamily.poppins,
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: fontWeight.medium
    })
  }
};

// 편의를 위한 별칭 (한글)
export const text = {
  // Large Title
  largetitle1: typography.largetitle_01.bold,
  largetitle2Bold: typography.largetitle_02.bold,
  largetitle2Semibold: typography.largetitle_02.semibold,
  largetitle2Extrabold: typography.largetitle_02.extrabold,
  // Title
  title1Semibold: typography.title_01.semibold,
  title1Medium: typography.title_01.medium,
  title1Bold: typography.title_01.bold,
  title2Semibold: typography.title_02.semibold,
  title2Medium: typography.title_02.medium,
  title2Bold: typography.title_02.bold,
  title3Semibold: typography.title_03.semibold,
  title3Medium: typography.title_03.medium,
  title3Bold: typography.title_03.bold,
  // Headline
  headlineSemibold: typography.headline_01.semibold,
  headlineMedium: typography.headline_01.medium,
  headlineRegular: typography.headline_01.regular,

  // Body
  body1Medium: typography.body_01.medium,
  body1Regular: typography.body_01.regular,
  body1Semibold: typography.body_01.semibold,
  body2Medium: typography.body_02.medium,
  body2Regular: typography.body_02.regular,

  // Caption
  caption1Medium: typography.caption_01.medium,
  caption1Regular: typography.caption_01.regular
};

// 편의를 위한 별칭 (영어)
export const textEn = {
  // Large Title
  largetitle1: typographyEn.largetitle_01.bold,
  largetitle2: typographyEn.largetitle_02.extrabold,
  largetitle3ExtraBold: typographyEn.largetitle_03.extrabold,
  largetitle3Bold: typographyEn.largetitle_03.bold,
  largetitle3Medium: typographyEn.largetitle_03.medium,

  // Title
  title1Semibold: typographyEn.title_01.semibold,
  title1Medium: typographyEn.title_01.medium,
  title2Semibold: typographyEn.title_02.semibold,
  title2Medium: typographyEn.title_02.medium,
  title2Bold: typographyEn.title_02.bold,
  title3Semibold: typographyEn.title_03.semibold,
  title3Medium: typographyEn.title_03.medium,

  // Headline
  headlineMedium: typographyEn.headline_01.medium
};
