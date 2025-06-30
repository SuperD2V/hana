import type { Metadata } from "next";
import "./globals.css";
import { Navigation, Footer } from "@/component/shared";
import { mainContent } from "./layout.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "하나비전교회",
  description: "하나비전교회 홈페이지"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={poppins.variable}>
      <body>
        <div className='flex flex-col h-full'>
          <Navigation />
          <main className={mainContent}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
