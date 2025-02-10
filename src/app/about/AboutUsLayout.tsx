"use client";
import { useState, useEffect } from "react";

import AboutIntro from "@/components/about/intro/AboutIntro";
import Loading from "@/components/ui/Loader";
import Footer from "@/components/layout/Footer";

import HappinessGuarantee from "@/components/about/happiness-guarantee/HappinessGuarantee";
import HavingFun from "@/components/about/having-fun/HavingFun";
import AboutMission from "@/components/about/mission/AboutMission";
import OurPeople from "@/components/about/our-people/OurPeople";

interface AboutPageData {
  data: {
    firstSection: {
      title: string;
      description: string;
      image: string;
    };
    headerteam: { title: string };
    mission: {
      title: string;
      content: string;
    };
    team: {
      name: string;
      role: string;
      image: string;
    }[];
    members: {
      name: string;
      position: string;
      image: string;
    }[];
    fourthSection: {
      title: string;
      description: string;
    };
    fifthSection: {
      // تم تعديل الاسم هنا
      title: string;
      content: string;
    };
    featurs: string[];
    footer: {
      text: string;
    };
    footersquares: {
      title: string;
      icon: string;
    }[];
  };
}

export default function AboutUsLayout() {
  const [aboutPageData, setAboutPageData] = useState<AboutPageData | null>(
    null
  );
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`https://programming-fashion.store/api/about`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setAboutPageData(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  if (isLoading) return <Loading isFullPage />;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <>
      <main>
        <AboutIntro data={aboutPageData?.data?.firstSection} />

        <AboutMission
          title={aboutPageData?.data?.headerteam?.title || ""}
          data={aboutPageData?.data?.mission}
        />

        <OurPeople
          data={aboutPageData?.data?.team || []}
          members={aboutPageData?.data?.members || []}
        />

        <HavingFun data={aboutPageData?.data?.fourthSection} />

        <HappinessGuarantee
          data={aboutPageData?.data?.fifthSection} // تم التعديل هنا
          featurs={aboutPageData?.data?.featurs || []}
        />
      </main>

      <Footer
        footerData={aboutPageData?.data?.footer}
        footebox={aboutPageData?.data?.footersquares || []}
      />
    </>
  );
}
