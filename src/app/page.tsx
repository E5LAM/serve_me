import Fix from "@/components/fix/Fix";
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
    </>
  );
}
