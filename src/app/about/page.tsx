import { Metadata } from "next";
import AboutUsLayout from "./AboutUsLayout";

export const metadata: Metadata = {
  title: "معلومات عنا",
  description: "موقع لتقديم خدمات النظافة والتنظيف منزلي وتجاري",
};

export default function AboutUsPage() {
  return <AboutUsLayout />;
}
