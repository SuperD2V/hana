import type { Metadata, Viewport } from "next";
import "./globals.css";
import { mainContent } from "./layout.css";
import { Poppins } from "next/font/google";
import { QueryProvider } from "./_provider/QueryProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanavision.org"),
  title: "하나비전교회 | 광교 하나비전교회",
  description: "경기도 용인시 광교  하나비전교회입니다.",
  keywords: [
    "하나비전교회",
    "광교교회",
    "광교하나비전교회",
    "하나비전교회",
    "하나교회",
    "이현수목사",
    "용인시교회",
    "광교신도시교회",
    "기독교",
    "예배",
    "교회"
  ],
  authors: [{ name: "하나비전교회" }],
  creator: "하나비전교회",
  publisher: "하나비전교회",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent", // iOS 홈 화면 추가 시 상태바 스타일
    title: "하나비전교회"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://hanavision.church",
    siteName: "하나비전교회",
    title: "하나비전교회 | 광교 하나비전교회",
    description: "경기도 용인시 광교 하나비전교회입니다.",
    images: [
      {
        url: "/images/main.png",
        width: 1200,
        height: 630,
        alt: "하나비전교회"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "하나비전교회 | 광교 하나비전교회",
    description: "경기도 용인시 광교 하나비전교회입니다.",
    images: ["/images/main.png"]
  },
  verification: {
    // google: "google-site-verification-code" // 실제 구글 서치 콘솔 인증 코드로 교체 필요
    // naver: "naver-site-verification-code", // 네이버 웹마스터 도구 인증 코드로 교체 필요
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#3B82F6",
    "msapplication-config": "/browserconfig.xml"
  },
  icons: {
    icon: [{ url: "/images/favicon.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FEF4CD"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={poppins.variable}>
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          <div className='flex flex-col h-full min-h-screen'>
            <main className={mainContent}>{children}</main>
          </div>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
