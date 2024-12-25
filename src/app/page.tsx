import Awards from "@/components/awards/Awards";
import Fix from "@/components/fix/Fix";
import Fix2 from "@/components/fix2/Fix2";
import Hero from "@/components/hero/Hero";
import MoreAbout from "@/components/more-about/MoreAbout";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Fix />
      <MoreAbout />
      <Fix2   />
      <Awards />
    </>
  );
}
