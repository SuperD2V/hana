import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/component/shared/ui/Navigation";

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
    <html lang='ko'>
      <body className='antialiased'>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
