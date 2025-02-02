"use client";
import { useState, useEffect } from "react";

import AboutIntro from "@/components/about/intro/AboutIntro";
import Loading from "@/components/ui/Loader";
import Footer from "@/components/layout/Footer";

import HappinessGuarantee from "@/components/about/happiness-guarantee/HappinessGuarantee";
import HavingFun from "@/components/about/having-fun/HavingFun";
import AboutMission from "@/components/about/mission/AboutMission";
import OurPeople from "@/components/about/our-people/OurPeople";

export default function AboutUsLayout() {
  const [aboutPageData, setAboutPageData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  console.log(aboutPageData);

  useEffect(() => {
    fetch(`https://programming-fashion.store/api/about`)
      .then((res) => res.json())
      .then((data) => {
        setAboutPageData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading isFullPage />;

  console.log(aboutPageData?.data);

  return (
    <>
      <main>
        <AboutIntro data={aboutPageData?.data?.firstSection} />

        <AboutMission
          title={aboutPageData?.data?.headerteam?.title}
          data={aboutPageData?.data?.mission}
        />

        <OurPeople
          data={aboutPageData?.data?.team}
          members={aboutPageData?.data?.members}
        />

        <HavingFun data={aboutPageData?.data?.fourthSection} />

        <HappinessGuarantee
          data={aboutPageData?.data?.fivthSection}
          featurs={aboutPageData?.data?.featurs}
        />
      </main>

      <Footer
        footerData={aboutPageData?.data?.footer}
        footebox={aboutPageData?.data?.footersquares}
      />
    </>
  );
}
