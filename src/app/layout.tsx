import type { Metadata } from "next";
import "./globals.css";
import { Navigation, Footer } from "@/component/shared";

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
    <html lang='ko' className='h-full'>
      <body className='antialiased flex flex-col h-full'>
        <Navigation />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
