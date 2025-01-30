import Asked from "@/components/asked/Asked";
import ContactUs from "@/components/contact-us/ContactUs";
import Main from "@/components/mainservice/main";
import ServiceOffered from "@/components/mainservice/service-offered";
import ServiceWeOffer from "@/components/mainservice/service-we-offer";
import SubServicesList from "@/components/mainservice/sub-services-list";

export default function Page() {
  return (
    <>
      <Main />
      <ServiceOffered />
      <ServiceWeOffer />
      <SubServicesList />
      <Asked />
      <ContactUs />
    </>
  );
}
