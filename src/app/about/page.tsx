import HappinessGuarantee from "@/components/about/happiness-guarantee/HappinessGuarantee";
import HavingFun from "@/components/about/having-fun/HavingFun";
import AboutIntro from "@/components/about/intro/AboutIntro";
import AboutMission from "@/components/about/mission/AboutMission";
import OurPeople from "@/components/about/our-people/OurPeople";
import { Metadata } from "next";

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
    </main>
  );
}
