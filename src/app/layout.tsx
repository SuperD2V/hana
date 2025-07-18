import type { Metadata } from "next";
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
