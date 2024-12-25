import type { Metadata } from "next";
import "./styles/globals.css";


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
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  );
}
