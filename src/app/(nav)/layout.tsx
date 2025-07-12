import { Footer, Navigation } from "@/component/shared";
import { mainContent } from "../layout.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className={mainContent}>{children}</main>
      <Footer />
    </>
  );
}
