import { Metadata } from "next";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";

import AboutIntro from "@/components/about/intro/AboutIntro";
import Loading from "@/components/ui/Loader";

const HappinessGuarantee = dynamic(
  () => import("@/components/about/happiness-guarantee/HappinessGuarantee"),
  {
    loading: () => <Loading />,
  }
);
const HavingFun = dynamic(
  () => import("@/components/about/having-fun/HavingFun"),
  {
    loading: () => <Loading />,
  }
);
const AboutMission = dynamic(
  () => import("@/components/about/mission/AboutMission"),
  {
    loading: () => <Loading />,
  }
);
const OurPeople = dynamic(
  () => import("@/components/about/our-people/OurPeople"),
  {
    loading: () => <Loading />,
  }
);
const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
  {
    loading: () => <Loading />,
  }
);

export const metadata: Metadata = {
  title: "معلومات عنا",
  description: "موقع لتقديم خدمات النظافة والتنظيف منزلي وتجاري",
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutIntro />

      <AboutMission />

      <OurPeople />

      <HavingFun />

      <HappinessGuarantee />

      <section className="testimonials">
        <Container>
          <Testimonials cols={undefined} />
        </Container>
      </section>
    </main>
  );
}
