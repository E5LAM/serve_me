import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import { ThemeProvider } from "react-bootstrap";

export const metadata: Metadata = {
  title: "ekhdmny | Home",
  description: "ekhdmny website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider dir="rtl">{children}</ThemeProvider>
      </body>
    </html>
  );
}
