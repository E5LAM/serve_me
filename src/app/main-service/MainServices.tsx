import Asked from "@/components/asked/Asked";
import ContactUs from "@/components/contact-us/ContactUs";
import Main from "@/components/mainservice/main";
import ServiceOffered from "@/components/mainservice/service-offered";
import ServiceWeOffer from "@/components/mainservice/service-we-offer";
import SubServicesList from "@/components/mainservice/sub-services-list";

async function getServicesData() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/services`);

    if (!res.ok) throw new Error("Failed to fetch services data");

    const data = await res.json();

    return {
      firstSection: data.data.firstSection || null,
      servicesecound: data.data.servicesecound || null,
      services: data.data.services || [],
      subServices: data.data.subservices || [],
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      firstSection: null,
      servicesecound: null,
      services: [],
      subServices: [],
    };
  }
}

export default async function MainServices() {
  const { firstSection, servicesecound, services, subServices } =
    await getServicesData();

  return (
    <>
      {firstSection && <Main firstSection={firstSection} />}
      {servicesecound && <ServiceOffered servicesecound={servicesecound} />}
      <ServiceWeOffer services={services} />
      <SubServicesList subServices={subServices} />
      <Asked />
      <ContactUs />
    </>
  );
}
