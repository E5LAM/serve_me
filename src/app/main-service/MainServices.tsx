"use client";
import { AxiosInstance } from "@/Api/Api";
import Asked from "@/components/asked/Asked";
import ContactUs from "@/components/contact-us/ContactUs";
import Main from "@/components/mainservice/main";
import ServiceOffered from "@/components/mainservice/service-offered";
import ServiceWeOffer from "@/components/mainservice/service-we-offer";
import SubServicesList from "@/components/mainservice/sub-services-list";
import { useEffect, useState } from "react";

type Service = {
  id: number;
  name: string;
  description: string;
  image: string;
};
type SubService = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type First = {
  title: string;
  description: string;
  image: string;
};
type Secound = {
  title: string;
  description: string;
  image: string;
};

function MainServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [firstSection, setFirstSection] = useState<First | null>(null);
  const [servicesecound, setServiceSecound] = useState<Secound | null>(null);
  const [subServices, setSubServices] = useState<SubService[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await AxiosInstance.get("services");

        // Ensure the structure matches the expected types
        setFirstSection(response.data.data.firstSection || null);
        setServiceSecound(response.data.data.servicesecound || null);
        setServices(response.data.data.services || []);
        setSubServices(response.data.data.subservices || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    handleFetch();
  }, []);

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

export default MainServices;
