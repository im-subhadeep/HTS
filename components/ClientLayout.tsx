"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <Header />
      <main className={!isHomePage ? "pt-32 md:pt-36 lg:pt-40" : ""}>
        {children}
      </main>
      {!isHomePage && <Footer />}
      <ScrollToTop />
    </>
  );
}
