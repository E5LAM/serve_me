import Awards from "@/components/awards/Awards";
import Fix from "@/components/fix/Fix";
import Fix2 from "@/components/fix2/Fix2";
import Hero from "@/components/hero/Hero";
import MoreAbout from "@/components/more-about/MoreAbout";
import BrandTrust from "@/components/brand-trust/BrandTrust";
import Map from "@/components/map/Map";
import Asked from "@/components/asked/Asked";
import ContactUs from "@/components/contact-us/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandTrust />
      <Fix />
      <MoreAbout />
      <Fix2 />
      <Awards />
      <Map />
      <Asked />
      <ContactUs />
    </>
  );
}
