import Main from "@/components/sub-service/main";
import ServiceOffered from "@/components/sub-service/service-offered";
import React from "react";
import "@/app/styles/sass/pages/_sub-service.scss";
import ServiceWeOffer from "@/components/sub-service/service-we-offer";

export default function Page() {
  return (
    <>
      <Main />
      <ServiceOffered />
      <ServiceWeOffer />
    </>
  );
}
