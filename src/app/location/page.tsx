import { Metadata } from "next";
import { Container } from "react-bootstrap";
import Hero from "@/components/hero/Hero";
import MoreAbout from "@/components/more-about/MoreAbout";
import Testimonials from "@/components/testimonials/Testimonials";
import TextSectionWithButton1 from "@/app/location/TextSectionWithButton";
import TextSectionWithButton2 from "./TextSectionWithButton2";
import TextSectionWithButton3 from "./TextSectionWithButton3";

export const metadata: Metadata = {
  title: "أخدمنى | الموقع",
  description: "موقع اخدمنى لخدمات التنظيف",
};

export default function LocationPage() {
  return (
    <main className="location">
      <Hero />
      <TextSectionWithButton1 />

      <section className="testimonials">
        <Container>
          <Testimonials cols={undefined} />
        </Container>
      </section>

      <MoreAbout />

      <TextSectionWithButton2 />
      <TextSectionWithButton3 />
    </main>
  );
}
