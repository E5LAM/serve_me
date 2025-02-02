"use client";
import { AxiosInstance } from "@/Api/Api";
import Asked from "@/components/asked/Asked";
import ContactUs from "@/components/contact-us/ContactUs";
import Main from "@/components/mainservice/main";
import ServiceOffered from "@/components/mainservice/service-offered";
import ServiceWeOffer from "@/components/mainservice/service-we-offer";
import SubServicesList from "@/components/mainservice/sub-services-list";
import { useEffect, useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";

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
  firstSection: {
    title: string;
    description: string;
    image: string;
  };
};
type Secound = {
  servicesecound: {
    title: string;
    description: string;
    image: string;
  };
};
function MainServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [firstSection, setfirstSection] = useState<First>();
  const [servicesecound, setServiceSecound] = useState<Secound>();
  const [subServices, setSubServices] = useState<SubService[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await AxiosInstance.get("services");
        setfirstSection(response.data.data.firstSection ?? undefined);
        setServiceSecound(response.data.data.servicesecound ?? undefined);
        setServices(response.data.data.services);
        setSubServices(response.data.data.subservices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    handleFetch();
  }, []);
  return (
    <>
      {firstSection && <Main firstSection={firstSection} />}
      {servicesecound && <ServiceOffered serviceSecound={servicesecound} />}
      <ServiceWeOffer services={services} />
      <SubServicesList subServices={subServices} />
      <Asked />
      <ContactUs />
    </>
  );
}

export default MainServices;
