import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import { ThemeProvider } from "react-bootstrap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | أخدمنى",
    default: "أخدمنى | الرئيسية",
  },
  description: "أخدمنى | موقع لتقديم خدمات النظافة والتنظيف منزلي وتجاري",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider dir="rtl">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
